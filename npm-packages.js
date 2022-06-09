// how to use npm 

// npm install ------ for dependecy instaltion

//.gitignore ------ for ingnoring modules ----- /node_modules in the .gitignore file
/*
    local dependecy install
    npm i <packageName>

 */

/* 
    Global dependecy install 
    npm install -g <packageName>

*/
/* 
    Dev dependecy install 
    npm install  <packageName> -D/--save-dev

*/

/* package.json is manifest file
    npm init
    npm init -y
    manual approach

*/
/*
npm start / npm run dev 
  "scripts": {
    "start": "nodemon app.js",
    "dev": "nodemon app.js"
  }      

*/

/*
  //uninstall package name
  npm uninstall <packageName>

  // or delete package-lock.json, delete node_modules and remove depenedency from package.json file

*/
// package-lock.json stores the dependency version and ensures the person who use the project
// has the same dependency version

const _ = require('lodash');

const arr =[3,[2,[5,[3]]]]

const newArr = _.flattenDeep(arr)

console.log(newArr)