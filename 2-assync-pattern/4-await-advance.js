const {readFile,writeFile}= require('fs');
// or we can use instead of util
// require('fs').promises
const util = require('util')
const readFilePromises = util.promisify(readFile)
const writeFilePromises = util.promisify(writeFile)





const start =async()=>{
    try{
        const first = await readFilePromises('./content/first.txt','utf8')
        console.log('inside')
        const second = await readFilePromises('./content/second.txt','utf8')
        await writeFilePromises('./content/mind-granade.txt',`welcome: ${first}, ${second}`,{flag:'a'})
    }catch(error){
        console.log(error)
    }
    
}
start()

console.log('last')