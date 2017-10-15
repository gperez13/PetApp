const express = require('express');
const router = express.Router();
const pets = require('../models/petfriends')




router.get('/', (req, res) => {
	console.log('woof')
	res.send('Who let the dawgs out?')
})






module.exports = router;