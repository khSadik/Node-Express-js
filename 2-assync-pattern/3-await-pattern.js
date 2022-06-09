const {readFile}= require('fs');
const { result } = require('lodash');

const getText = (path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(err,result)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(result)
            }
        })
    })
}

const start =async()=>{
    try{
        const first = await getText('./content/first.txt')
        const second = await getText('./content/second.txt')
        console.log(first,second)
    }catch(error){
        console.log(error)
    }
    
}
start()