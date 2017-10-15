const mongoose = require('mongoose'); 

const PetSchema = new mongoose.Schema({
	Name: String,
	Species: String,
	Color: String,
	Age: Number
})


module.exports = mongoose.model('Pet', PetSchema)