const http = require('http');

// Using event Emitter Api
const server = http.createServer()

//server emits the request event
//subscribe /listen/response for the request event

server.on('request',(req,res)=>{
    res.end('welcome');
});

server.listen(5000);