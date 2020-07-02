const parseTitle = require('../helpers/parseTitle');
const parseImageUrl = require('../helpers/parseImgUrl');
const getSource = require('../helpers/getSource');
const notOlderThan = require('../helpers/notOlderThan');
const removeDuplicates = require('../helpers/removeDuplicates');
const sources = require('../sources/feeds/feedSources');

const parseCategory = require('../helpers/parseCategory');

const parseData = arr => {
	return (req, res, next) => {
		const results = arr
			.map(i => {
				return {
					title: parseTitle(i.title),
					date: i.date,
					link: i.link,
					image: i.enclosures[0] ? parseImageUrl(i.enclosures[0]) : i.image.url,
					categories: parseCategory(i.categories),
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

		const uniqueResults = removeDuplicates(results, 'title');

		res.parsedData = uniqueResults;

		next();
	};
};

module.exports = parseData;
