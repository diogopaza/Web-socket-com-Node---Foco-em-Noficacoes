var app = require('express')()
var server = require('http').Server(app)
var io = require('socket.io')(server)
var bodyParser = require('body-parser')

server.listen(45555, () =>{
    console.log("Conectado a porta 4555");
});


