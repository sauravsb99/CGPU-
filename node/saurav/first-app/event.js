const EventListener = require('events');
const emitter = new EventListener();


emitter.on('Message',function() {
    console.log("Kitty sadanam");
})
emitter.emit('Message');

