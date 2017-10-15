const express = require('express');
const router = express.Router();




router.get('/', (req, res) => {
	console.log('woof')
	res.send('Who let the dawgs out?')
})






module.exports = router;