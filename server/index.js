var express = require('express');
var bodyParser = require('body-parser');
var socket = require('socket.io')
var fs = require('fs');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
 var db = require('../database-mysql');
// var items = require('../database-mongo');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());

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
    var params = [req.body.username, req.body.email, req.body.password];

    db.checkUserExist(params[0], function(err, result){
    	if (err) {
    		console.log(err)
    		return;
    	} 
      if (result.length > 0){
        res.send("user-exist")
    	} else {
    	  db.addUser(params, function(err, result){
				  if (err) {
					  console.log(err)
				  } else{
					  res.send("user-not-exist");
				  }
	      });
    	}
    });

    
	
	

});

app.post('/sign-in', function(req, res){
	console.log(req.body);
   

	db.checkUserExist(req.body.username, function(err, result) {
		if (err) {
			console.log(err);
			return;
		}
		if (result.length > 0) {
			if (result[0].password === req.body.password) {
				res.send("successAuth");
			} else {
				res.send("noAuth");
			}
		} else {
			res.send("noUser");
		}
	})
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
	});

	socket.on("typing", function(data){
		socket.broadcast.emit("typing",data);
	})

})




















