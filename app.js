var app = require('express')();
var http = require('http');
var server = http.Server(app);
var io = require('socket.io')(server);
var fs = require('fs');
app.get('/', function(req, res) {
  fs.createReadStream("./index.html").pipe(res);
});
io.on('connection', function(socket){
  socket.on('event', function(data){
    console.log(data);
    socket.broadcast.emit('event', data);
  });
});
server.listen(3000);
