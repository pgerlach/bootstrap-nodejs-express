var express = require('express'),
  conf = require('./conf');

var app = express.createServer();
app.configure( function () {
  app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res) {
  res.send('Hello World');
});

app.listen(conf.server.port);
console.log('Listening on ' + conf.server.host + ':' + conf.server.port);
