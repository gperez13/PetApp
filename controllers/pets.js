const express = require('express');
const router = express.Router();
const pets = require('../models/petfriends')




router.get('/', (req, res) => {


	pets.find((err, pets) =>{
		if(err){
			res.send('there was an error with the database')
		} else {
				res.render('index', {pets: pets})
		}
	})
})






module.exports = router;