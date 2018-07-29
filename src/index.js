var express = require('express');
var app = express();
var playRouter = require('./routes/play');
var port = process.env.port || 8082;

app.get('/', function(req, res) {
    res.send('hello world');
})

app.use('/play', playRouter);

app.listen(port)
console.log('app start on port ', port);