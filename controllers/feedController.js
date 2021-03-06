const sources = require('../sources/feedSources');
const { filterOutNonUnique } = require('../helpers/feedParsing');
const Feed = require('../models/Feed');
const defaultPage = 1;
const defaultLimit = 30;

exports.getOptions = (req, res, next) => {
	const { page, limit } = req.query;

	req.options = {
		page: parseInt(page) || defaultPage,
		limit: parseInt(limit) || defaultLimit,
		select: '-__v -_id -__ttl -guid',
		sort: {
			isoDate: -1,
		},
	};

	next();
};

exports.getLatest = async (req, res) => {
	const { options } = req;

	try {
		const feeds = await Feed.paginate({ categories: { $ne: 'tekniikkaen' } }, options);
		res.status(200).json(feeds);
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: err,
		});
	}
};

exports.getSources = (req, res) => {
	try {
		const result = filterOutNonUnique(sources).sort((a, b) => (a.source < b.source ? -1 : 1));
		res.status(200).json({ sources: result });
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: err,
		});
	}
};

exports.getByCategory = async (req, res) => {
	const { options } = req;
	const { category } = req.params;

	try {
		const feeds = await Feed.paginate({ categories: category }, options);
		res.status(200).json(feeds);
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: err,
		});
	}
};

exports.getByKeyword = async (req, res) => {
	const { options } = req;
	const { keyword } = req.params;

	try {
		const feeds = await Feed.paginate(
			{
				$or: [
					{ title: { $regex: `${keyword}`, $options: 'i' } },
					{ categories: { $regex: `${keyword}`, $options: 'i' } },
				],
			},
			options
		);

		res.status(200).json(feeds);
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: err,
		});
	}
};
