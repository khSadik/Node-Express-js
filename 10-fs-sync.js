// synchronous or  blocking module system

//Destructuring the property

const {readFileSync,writeFileSync} = require('fs');


const first = readFileSync('./content/first.txt','utf-8')

const second = readFileSync('./content/second.txt','utf-8')

console.log()

//create a new file or override the existing file

writeFileSync('./content/new.txt',`Welcome : ${first}, ${second}`)

//append on the existing file 

writeFileSync('./content/new.txt',`Welcome : ${first}, ${second} .`,{flag:'a'})