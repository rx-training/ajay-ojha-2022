const EventEmitter = require('events');

const emitter = new EventEmitter();

// listner

emitter.on('fileIsReady',(data)=>{
    console.log('Hello, your file is ready you can continue your work');
    console.log(data);
})



module.exports = {emitter};