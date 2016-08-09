// Whole-script strict mode syntax
"use strict";

var app = angular.module('chatApp', []);

app.factory('socket', function () {
    var socket = io.connect('http://localhost:3000');
    return socket;
});

app.controller('ChatCtrl', function ($scope, socket) {
    $scope.msgs = [];
    $scope.sendMsg = function () {
        socket.emit('send msg', $scope.msg.text);
         console.log(' angular send message' + $scope.msg.text);
        $scope.msg.text = '';
    }

    socket.on('get msg', function(data){
        console.log(' got message' + data);
        $scope.msgs.push(data);
        $scope.$digest();
    });
});