var express = require('express');
var app = express();
var http = require('http');
var server = http.Server(app);
var io = require('socket.io')(server);
var users_key = 'users';
var sioredis = require('socket.io-redis');
io.adapter(sioredis({ 
  host: 'localhost', 
  port: 6379,
}));
app.use(express.static(__dirname + "/public"));
io.on('connection', function(socket){
  socket.on('image', function(data){
    socket.broadcast.volatile.emit('image', {
      id: socket.id,
      blob: data
    });
  });
  socket.on("disconnect", function(){
    socket.broadcast.emit("leave", {
      id: socket.id
    });
  });
});
server.listen(process.env.PORT || 3000);
