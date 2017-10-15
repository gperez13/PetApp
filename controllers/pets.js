const express = require('express');
const router = express.Router();
const pets = require('../models/petfriends')




router.get('/', (req, res) => {
	console.log('woof')
	res.render('index', {pets: pets})
})






module.exports = router;