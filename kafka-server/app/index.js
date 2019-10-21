const express = require('express')();
const http = require('http').Server(express);
const io = require('socket.io')(http);
const Kafka = require('no-kafka');

io.on('connection', socket => {
  console.log('User connected');
  socket.on('disconnect', () => {
    console.log('User disconnected');
  })
});

http.listen(8091, async () => {
  console.log("Listening in port 8091");
  var consumer = new Kafka.SimpleConsumer();

  // data handler function can return a Promise
  var dataHandler = function (messageSet, topic, partition) {
      messageSet.forEach(function (m) {
        io.emit('message', JSON.parse(m.message.value.toString('utf8')));
      });
  };
  await consumer.init();
  await consumer.subscribe('my-replicated-topic', [0], dataHandler);
})
