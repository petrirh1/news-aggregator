const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const ttl = require('mongoose-ttl');
const validator = require('mongoose-unique-validator');
const TIME_TO_LIVE = require('../constants/ttl');

const FeedSchema = mongoose.Schema({
	title: { type: String, required: true, unique: true },
	link: { type: String, required: true },
	author: String,
	guid: { type: String, unique: true },
	contentSnippet: String,
	categories: [{ type: String, lowercase: true }],
	isoDate: { type: Date, required: true },
	source: { type: String, required: true },
	image: { url: String, width: String, height: String },
	favicon: { type: String, required: true }
});

FeedSchema.plugin(mongoosePaginate);
FeedSchema.plugin(ttl, { ttl: TIME_TO_LIVE });
FeedSchema.plugin(validator);

module.exports = mongoose.model('Feed', FeedSchema);
