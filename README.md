# Chat Application
This is a two person realtime chat application. i.e. When one person sends a message, the other one will receive it and also he can reply back in real time. Each person has seperate chat windows(sessions). The application runs on MEAN Stack and uses socket.io for establishing connection to the socket. Socket.io is a node module that helps to make socket listening possible. The socket.io listens to the port at which the clients are connected. Whenever a change occurs in the port, the socket reports it to the server. For e.g, if someone sends a message the socket.io notifies the server and the server broadcasts it to all other clients. The chat messages are also stored in a database.


## Quick Start

### Install dependencies:
```
$ npm install
$ bower install
```
### Start the server:
```
$ npm start
```
