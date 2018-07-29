var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send('play index page');
});

router.get('/author', function(req, res) {
    res.send('play author: 郭旭峰');
});

module.exports = router;