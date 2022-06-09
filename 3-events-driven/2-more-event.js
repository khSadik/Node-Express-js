//there could be multiple function for the same event
// the order of on and emit method matters
// can pass the arguments when emitting the event


const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response',(name)=>console.log(`Name :${name}`))

customEmitter.on('response',()=>console.log('more data'))

customEmitter.emit('response','jhon')
