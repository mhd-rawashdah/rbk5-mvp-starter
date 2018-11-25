var express = require('express');
var bodyParser = require('body-parser');
var socket = require('socket.io')
var fs = require('fs');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
 var items = require('../database-mysql');
// var items = require('../database-mongo');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));


// app.get('/items', function (req, res) {
//   items.selectAll(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });


app.post('/sign-up', function(req, res){
	console.log(req.body);
	res.sendStatus(200);
});

app.post('/sign-in', function(req, res){
	console.log(req.body);
});

var server = app.listen(3000, function() {
  console.log('listening on port 3000!');
});


//setup Socket 

var io = socket(server);

io.on('connection', function(socket){
	console.log('socket is work' + socket.id);
	socket.on('chat', function(data){
		console.log(data);
		io.sockets.emit('chat', data);
	})
})
