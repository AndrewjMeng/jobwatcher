const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jobSchema = new Schema({
	_id: String,
	title: String,
	loc: String,
	link: String,
	show: { type: Boolean, default: true },
	complete: { type: Boolean, default: false }
});

const Jobs = mongoose.model('Jobs', jobSchema);

module.exports = Jobs;