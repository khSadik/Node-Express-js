const {readFile, read} = require('fs')

console.log('starting first task')

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log(result);
    console.log('completed first task')

})

console.log('starting second task')