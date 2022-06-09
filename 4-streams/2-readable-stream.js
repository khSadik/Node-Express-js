const {createReadStream}= require('fs')

const stream = new createReadStream('./content/big.txt',{encoding:'utf8'})

//default 64kb
//last buffer - remainder 
//highWaterMark - controll size
//new createReadStream('./content/big.txt',{higWaterMark:9000,encoding:'utf8'})

stream.on('data',(result)=>{console.log(result)})