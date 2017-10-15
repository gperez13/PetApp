const mongoose = require('mongoose'); 

const PetSchema = new mongoose.Schema({
	Name: String,
	Species: String,
	Color: String,
	Age: Number,
	Image: String
})


module.exports = mongoose.model('Pet', PetSchema)