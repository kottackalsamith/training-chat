// Whole-script strict mode syntax

"use strict";

var mongoose     = require('mongoose');

mongoose.Promise = require('bluebird');

var databaseName  = "chat";

var messageSchema = mongoose.Schema({
    message:        String,
    username:       String,
    time:           { type: Date, default: Date.now }
});

mongoose.connect('mongodb://localhost/' + databaseName, function (err) {
    if (err)
        throw err;
    else
        console.log('Database Connected');
});

module.exports = mongoose.model('message', messageSchema);

