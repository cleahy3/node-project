var mongoose = require('mongoose');

var FilmSchema = mongoose.Schema({
	title: String,
	description: String
});

module.exports = mongoose.model('Film',FilmSchema);