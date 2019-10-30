// const Serialport =  require('serialport');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketio.listen(server);
const date = require('date-and-time')

server.listen(3000, function(){

  console.log("server listenig 3000")


})


app.use(express.static(__dirname + '/public'));

const { Board, Thermometer, Led } = require("johnny-five");
const board = new Board();


/*
const now = new Date();
const fecha =  date.format(now, 'YYYY/MM/DD HH:mm:ss');  
io.emit('fecha',fecha)
*/

board.on("ready", () => {
  const thermometer = new Thermometer({
    controller: "LM35",
    pin: "A1"
  });



  thermometer.on("change", (data) => {
    const {celsius, fahrenheit, kelvin} = thermometer;
    console.log("Thermometer");
    console.log( "  celsius      : ", celsius);
    console.log("  fahrenheit   : ", fahrenheit);
    console.log("  kelvin       : ", kelvin);
    console.log("--------------------------------------");
    console.log(thermometer.celsius);

    io.emit('temp', data);

    

  /*  if(thermometer.celsius < 26){
      const led = new Led(8);
      led.strobe(2000);
      led.blink();
    }

    */
  });
});


