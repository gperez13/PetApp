const express = require('express');
const app = express();
require('./db/db')

const petController = require('./controllers/pets');





app.use(express.static('public'));





app.use('/pets', petController)
app.listen(3001, () =>{
	console.log('app is a good boy')
})