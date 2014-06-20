var express = require('express');
var app = express();
var http = require('http');
var server = http.Server(app);
var io = require('socket.io')(server);
var users = {};
app.use(express.static(__dirname + "/public"));
io.on('connection', function(socket){
  socket.on('join', function(data){
    if (!users[socket.id]) {
      users[socket.id] = true;
      io.emit('join', users);
    }
  });
  socket.on('event', function(data){
    socket.broadcast.emit('event', {
      id: socket.id,
      data: data
    });
  });
});
server.listen(3000);
