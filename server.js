// Whole-script strict mode syntax
"use strict";

var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io')(server);

var port = 3000;
var host = "127.0.0.1";

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));
io.sockets.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('send msg', function(data){
        console.log('message' + data);
        io.sockets.emit('get msg', data);
    });
});

var myserver = server.listen(port, host, function () {
    var host = myserver.address().address;
    var port = myserver.address().port;
    console.log('Server running at http://%s:%s', host, port);
});