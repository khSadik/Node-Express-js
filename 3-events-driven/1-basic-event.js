const EventEmitter =  require('events');

const customEmitter = new EventEmitter();


customEmitter.on('response',()=>console.log(`data recevied`));

customEmitter.emit('response');