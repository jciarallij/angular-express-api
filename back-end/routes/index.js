var express = require('express');
var router = express.Router();

/* post search page. */
router.post('/search', function(req, res, next) {
  
	var name = req.body.name;

	var dcClass = [
		'Tristan',
		'Josh',
		'Bogdan',
		'Keith',
		'Will',
		'Curtis',
		'Joe',
		'Kochan',
		'Patrick',
		'Jonathan',
		'Jeremy'
	];

	if(dcClass.indexOf(name) > -1){
		res.json({message: "Hello, " + name + ", you are a student in this class."})
	} else {
		res.json({message: "You are not in this class."});
	}

	// res.json({message: "Success"});


});

module.exports = router;
