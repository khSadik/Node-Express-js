// built in http module is used for setup web server

const http = require('http');

const server = http.createServer((req,res)=>{
    res.write('Welcome to our page');
    res.end();
});

// listen on this port

server.listen(5000);