var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var mongoUrl = 'mongodb://localhost:27017/btb';

var db;

MongoClient.connect(mongoUrl, function(error, database){
	db = database;
});

/* post search page. */
router.post('/search', function(req, res, next) {
  	// We get name from the post request (in this case, from Angular)
	var individualStudent = req.body.name;
	db.collection('students').find({name: individualStudent}).toArray(function(error, studentResult){
		if(studentResult == 0){
			db.collection('students').insertOne({
				name: individualStudent
			})
			res.json("Sorry, there were no results. We have added " + individualStudent);
		} else {
			res.json("Student: " + studentResult[0].name);
		}
		

	});

});

router.get('/search', function(req, res, next) {
	db.collection('students').find().toArray(function(error, studentResult){
		res.json(studentResult);
	});
		
});


module.exports = router;
