//streams are used for working with large file
// 4 types of streams 1)readable 2)writable 3)duplex 4)transform


//creating big file

const {writeFileSync}= require('fs')

for(let i=0;i<10000;i++){
    writeFileSync('./content/big.txt',`Hello : ${i}\n`,{flag:'a'})
}