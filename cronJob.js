const feedSources = require('./sources/feedSources');
const Feed = require('./models/Feed');
const Parser = require('rss-parser');
const parser = new Parser({
	customFields: {
		item: [
			['image', 'image'],
			['enclosures', 'image'],
			['rss:image', 'image'],
			['media:content', 'image'],
			['media:thumbnail', 'image'],
			['content:encoded', 'encodedContent']
		]
	}
});

const saveFeeds = () => {
	feedSources.forEach(async source => {
		try {
			const feed = await parser.parseURL(source.url);
			const parsedFeed = feed.items.map(item => feedParser(item, source));

			parsedFeed
				.filter(item => daysAgo(new Date(item.isoDate)))
				.forEach(async feed => {
					const newFeed = new Feed({
						...feed,
						source: source.source,
						favicon: source.favicon
					});

					Feed.findOne({ title: newFeed.title }, (err, feed) => {
						if (err) console.log(err);
						if (!feed) {
							newFeed.save((err, data) => {
								if (err) console.log(err);
								if (data) console.log(data._id, 'saved to database.');
							});
						}
						return;
					});
				});
		} catch (err) {
			if (err === 'Status code 404') return;
			console.log(err);
		}
	});
};

const feedParser = (feed, src) => {
	return { ...feed, image: parseImageUrl(feed), categories: parseCategories(feed, src) };
};

const parseImageUrl = feed => {
	if (feed.image) {
		if (typeof feed.image === 'string') return feed.image;
		return feed.image['$'].url;
	}

	// mostly for YLE's stamp sized images which are resizable by altering the url
	if (feed.enclosure) {
		return feed.enclosure.url
			.replace('w_205', 'w_600')
			.replace('h_115', 'h_337')
			.replace('http:', 'https:');
	}

	//extract image url from content
	if (feed.content) {
		const matches = feed.content
			.replace('http:', 'https:')
			.match(/\b(https?:\/\/\S+(?:png|jpe?g|gif)\s*)\b/i);

		return matches ? matches[0] : null;
	}

	return null;
};

const parseCategories = (feed, src) => {
	if (!Array.isArray(feed.categories)) return;

	const newCategories = feed.categories
		.map(item => {
			if (item.hasOwnProperty('_')) {
				return item['_'];
			}
			return item;
		})
		.map(item => item.toLowerCase());

	// append category from source if exists
	if (src.category) {
		if (!newCategories.includes(src.category.toLowerCase())) {
			newCategories.push(src.category);
		}
	}

	return newCategories;
};

const daysAgo = date => {
	const DAYS = 60 * 60 * 24 * 5 * 1000; // 5 days
	const daysAgo = Date.now() - DAYS;
	return date >= daysAgo;
};

saveFeeds();