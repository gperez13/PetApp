const mongoose = require('mongoose'); 

const PetSchema = new mongooseSchema({
	Name: String,
	Species: String,
	Color: String,
	Age: Number
})


module.exports = mongoose.model('Pets', PetSchema)