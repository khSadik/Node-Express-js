// os Module

const os = require('os');

// info about the current user 

const user = os.userInfo();

s

console.log(user);

// how long the os has been uptime

const uptime = os.uptime();

console.log(`the system is running for ${uptime} seconds`)

// Detailed info about the os 

const currentUser ={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()

}
console.log(currentUser);