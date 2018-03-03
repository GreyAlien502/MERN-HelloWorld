var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var React = require('react');
var ReactDOM = require('react-dom');

let eventDB = require('../src/eventDB.js');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

router.get('/', function(request, response) {
	response.render('index-tmpl', {
		pageID: 'index'
	});
});

router.get('/events', async function(request, response) {
	console.log(await eventDB.get());
	response.status(200).send(await eventDB.get());
});
router.post('/events', function(request, response) {
	eventDB.add(request.body);
	response.status(200).send('k.');
});

router.get('/add', function(request, response) {
    response.render('index-tmpl', {
        pageID: 'add'
    });
});

module.exports = router;
