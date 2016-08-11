// Whole-script strict mode syntax
"use strict";

var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    server = require('http').createServer(app),
    io = require('socket.io')(server);

var port = 3000;
var host = "127.0.0.1";

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));

var databasename = "chat";
mongoose.connect('mongodb://localhost/' + databasename, function (err) {
    if (err) {
        throw err;
    }
    else {
        console.log("Db working");
    }
});

var msgSchema = mongoose.Schema({
    message: String,
    time: { type: Date, default: Date.now },
    username : String
});

var Chat = mongoose.model("Message", msgSchema);

var myserver = server.listen(port, host, function () {
    var host = myserver.address().address;
    var port = myserver.address().port;
    console.log('Server running at http://%s:%s', host, port);
});

io.sockets.on('connection', function (socket) {
    socket.on('send msg', function (data) {
        console.log('server Get message:' + data.message + '\n username' + data.username);
        var newMsg = new Chat({ message: data.message, username: data.username});
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