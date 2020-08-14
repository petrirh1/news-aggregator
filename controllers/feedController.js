const Feed = require('../models/Feed');
const defaultPage = 1;
const defaultLimit = 30;

exports.getLatest = async (req, res) => {
	const { page, limit } = req.query;

	try {
		const options = {
			page: parseInt(page) || defaultPage,
			limit: parseInt(limit) || defaultLimit,
			select: '-__v -_id -__ttl',
			sort: {
				isoDate: -1
			}
		};

		const feeds = await Feed.paginate({ categories: { $ne: 'tekniikkaen' } }, options);

		res.status(200).json(feeds);
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: err
		});
	}
};

exports.getByCategory = async (req, res) => {
	const { page, limit } = req.query;
	const { category } = req.params;

	try {
		const options = {
			page: parseInt(page) || defaultPage,
			limit: parseInt(limit) || defaultLimit,
			select: '-__v -_id -__ttl',
			sort: {
				isoDate: -1
			}
		};

		const feeds = await Feed.paginate({ categories: category }, options);

		res.status(200).json(feeds);
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: err
		});
	}
};