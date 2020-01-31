/** @format */

const express = require('express');
const router = express.Router();

const { init } = require('../controllers');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
	console.log('Time: ', Date.now());
	next();
});

// define routes
router.get('/init', init);

module.exports = router;
