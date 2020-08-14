const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const ttl = require('mongoose-ttl');
const validator = require('mongoose-unique-validator');

const FeedSchema = mongoose.Schema({
	title: { type: String, required: true },
	link: { type: String, required: true, unique: true },
	author: String,
	guid: String,
	contentSnippet: String,
	categories: [{ type: String, lowercase: true }],
	isoDate: { type: Date, required: true },
	source: { type: String, required: true },
	image: String,
	favicon: { type: String, required: true }
});

FeedSchema.plugin(mongoosePaginate);
FeedSchema.plugin(ttl, { ttl: '5d' }); // Time To Live value
FeedSchema.plugin(validator);

module.exports = mongoose.model('Feed', FeedSchema);