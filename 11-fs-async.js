// asynchronous or nonblocking module system

//destructuring property 

const {readFile,writeFile} =require('fs')

readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    else{
        const first = result;
        readFile('./content/second.txt','utf-8',(err,result)=>{
            if(err){
                console.log(err);
                return;

            }
            else{
                const second = result;
                writeFile('./content/write-async.txt',`Welcome : ${first}, ${second} .`,{flag:'a'},(err,result)=>{
                    if(err){
                        console.log(err);
                        return;
        
                    }
                    console.log(result)
                })
            }
        })
    }
})