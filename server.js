var express = require('express'),
  conf = require('./conf');

var app = express.createServer();

app.get('/', function(req, res){
    res.send('Hello World');
});

app.listen(process.env.PORT || conf.server.port);
console.log('Listening on ' + conf.server.host + ':' + conf.server.port);
