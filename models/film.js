var mongoose = require('mongoose');

var ActorSchema = mongoose.Schema({
	title: String,
	description: String
});

module.exports = mongoose.model('Actor',ActorSchema);