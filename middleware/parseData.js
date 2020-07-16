const parseTitle = require('../helpers/parseTitle');
const parseImageUrl = require('../helpers/parseImgUrl');
const getSource = require('../helpers/getSource');
const notOlderThan = require('../helpers/notOlderThan');
const removeDuplicates = require('../helpers/removeDuplicates');
const sources = require('../sources/feeds/feedSources');

const getCategory = require('../helpers/getCategory');

const parseData = arr => {
	return (req, res, next) => {
		const results = arr
			.map(i => {
				return {
					title: parseTitle(i.title),
					date: i.pubDate ? i.pubDate : i.meta.pubDate,
					link: i.link,
					guid: i.guid,
					image: parseImageUrl(
						i.image && i.image.length
							? i.image
							: i.enclosures[0]
							? i.enclosures[0]
							: i['rss:image']
							? i['rss:image']['#']
							: i['media:content']
							? i['media:content']
							: i['media:thumbnail']
							? i['media:thumbnail']['@'].url
							: i.description
					),
					// categories: i.categories,
					categories: getCategory(i.categories),
					source: getSource(
						[
							i.meta.title,
							i.meta['rss:link'] ? i.meta['rss:link']['#'] : i.meta.title
						],
						sources
					)
				};
			})
			.filter(obj => notOlderThan(obj.date))
			.sort((a, b) => b.date - a.date);

		const uniqueResults = removeDuplicates(results, 'link');
		// console.log(results.length, ' => ', uniqueResults.length);

		res.parsedData = uniqueResults;

		next();
	};
};

module.exports = parseData;
