// Modules

// const firstname = 'khandaker';
// const secondname = 'sadik';

// const sayHello =(name)=>{
//     console.log(`hello  ${name}`)
// }

// sayHello('khandaker Sadik')
// sayHello(firstname);
// sayHello(secondname);

//--------------


// CommonJs, every file is module (by default)

// Modules - Encapsulated code (only share minimum)
const names = require('./4-names.js')
const sayHello = require('./5-utils.js')
const data = require('./6-alternatives.js')

require('./7-mind-granade');

sayHello('Jhon Peter');
sayHello(names.firstname);
sayHello(names.secondname);