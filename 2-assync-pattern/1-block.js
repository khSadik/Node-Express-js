const http  = require('http')

const server = http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end('Welcome to home')
    }
    else if(req.url=="/about"){
        for(let i=0;i<1000;i++){
            for(let j=0;j<1000;j++){
                console.log(`${i},${j}`)
            }
        }
        res.end("about")
    }
    else{
        res.end('hello world')
    }
})

server.listen(5000,()=>{
    console.log('listening on port 5000')
})
console.log('last task')