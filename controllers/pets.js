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
}) //end of main page loading screen





router.get('/new', (req, res) =>{
	res.render('new', {})
})


router.post('/create', (req, res) =>{

	pets.create(req.body, (err, pets) => {
		if(err){
			res.send('this is not looking so well')
		} else{
			res.redirect('/pets')
		}
	})
}) // end of pet creation 



router.get('/:index/edit', (req, res) => {
	pets.find(req.params.index, (err, pets) =>{
		if(err){
			console.log('Fetch, boy!')
		} else{
			res.render('edit', {pets: pets[req.params.index], index: req.params.index})
		}
	})
})




router.delete('/:index', (req, res) =>{

	pets.find((err, pets) =>{
		if(err){
			console.log('You screwed the pooch')
		} else {
			pets[req.params.index].remove();
			res.redirect('/pets')
		}
	})
})












module.exports = router;