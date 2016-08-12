// Whole-script strict mode syntax
"use strict";

var express = require('express'),
    app = express(),
    morgan = require('morgan'),
    server = require('http').createServer(app),
    io = require('socket.io')(server);

// log every request to the console
app.use(morgan('dev'));

// 
app.use(express.static(__dirname + '/public'));

// 
app.use(express.static(__dirname + '/bower_components'));

// set the server port
var port = 3000;
// set the host 
var host = "127.0.0.1";

// Start Server
var myserver = server.listen(port, host, function () {
    var host = myserver.address().address;
    var port = myserver.address().port;
    console.log('Server running at http://%s:%s', host, port);
});


// Initalize a instance of the database
var ChatDb = require('./app/model');


io.sockets.on('connection', function (socket) {
    socket.on('send msg', function (data) {
        console.log('server Get message:' + data.message + '\n username' + data.username);
        var newMsg = new ChatDb({ message: data.message, username: data.username });
        newMsg.save(function (err) {
            if (err) {
                throw err;
            }
            else {
                io.sockets.emit('get msg', data);
            }
        });
    });
});