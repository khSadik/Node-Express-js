const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to our homepage');
    }
    else if(req.url==='/about'){
        res.end('this our about page')
    }
    else 
        res.end(`
    <h1>Error !</h1>
    <a href='/'>home</a>
    `)
})
server.listen(5000);