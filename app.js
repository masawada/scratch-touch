// require modules
var express = require('express')
  , sio = require('socket.io')
  , dgram = require('dgram');

// create Server, init dgram
var app = express.createServer();
var sccon = dgram.createSocket('udp4');

// configure
app.configure(function(){
  app.use(express.static(__dirname + '/public'));
  app.set('views', __dirname + '/view');
  app.set('view engine', 'jade');
});

// routing
app.get('/', function(req, res){
  res.render('index', { layout: false });
});

// listen
app.listen(3000, function(){
  var addr = app.address();
  console.log('   app listening on http://' + addr.address + ':' + addr.port);
});

// socket.io
var io = sio.listen(app);

// main
io.sockets.on('connection', function(socket){
  socket.emit();
  
  // sensor update
  socket.on('point-update', function(points){
    var p = points;
    console.log(points);
    var message = 'sensor-update'
                + ' "ax" ' + p.ax
                + ' "ay" ' + p.ay
                + ' "rx" ' + p.rx
                + ' "ry" ' + p.ry;
    // console.log('   message generated: ' + message);
    
    var packet = new Buffer(message);
    sccon.send(packet, 0, packet.length, 42001, '127.0.0.1', function(){
      // console.log('   message sent.');
    });
  });
  
  socket.on('broadcast', function(ctx){
    var message = 'broadcast "' + ctx + '"';
    // console.log('   message generated: ' + message);
    
    var packet = new Buffer(message);
    sccon.send(packet, 0, packet.length, 42001, '127.0.0.1', function(){
      // console.log('   message sent.');
    });
  });
});
