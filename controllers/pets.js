const express = require('express');
const router = express.Router();
const pets = require('../models/petfriends')




router.get('/', (req, res) => {


	pets.find((err, pets) =>{
		if(err){
			res.send('there was an error with the database')
		} else {
			console.log(pets[12].Name)
				res.render('index', {pets: pets})
		}
	})
}) //end of main page loading screen





router.get('/new', (req, res) =>{
	res.render('new', {})
})


router.post('/create', (req, res) =>{

	pets.create(req.body, (err, pets) => {
		if(err){
			res.send('this is not looking so well')
		} else{
			console.log(req.body)
			res.redirect('/pets')
		}
	})
}) // end of pet creation 














module.exports = router;