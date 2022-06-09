//path module for file path

const path = require('path');


// separator property for os system

const  separator = path.sep
console.log(separator);

// joining multiple path and returns normalize path

const filePath = path.join('/content','subfolder','text.txt');

console.log(filePath);

// Give only the text.txt file name

const basePath = path.basename(filePath);

console.log(basePath);

// give the absolute path 

const absolutePath = path.resolve(__dirname,'content','subfolder','text.txt')
console.log(absolutePath);