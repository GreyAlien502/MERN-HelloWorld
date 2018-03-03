var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var React = require('react');
var ReactDOM = require('react-dom');

var app = express();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

router.get('/', function(request, response) {
    response.render('index-tmpl', {
        pageID: 'index'
    });
});

app.post('/', function(request, response) {
	console.log(request);
});

router.get('/add', function(request, response) {
    response.render('index-tmpl', {
        pageID: 'add'
    });
});

module.exports = router;
