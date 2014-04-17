

var port = process.env.PORT || 3000;

var express = require('express')
  , routes = require('./routes')  
  , http = require('http')
  , path = require('path')
  , io   = require('socket.io')
  , fs   = require('fs');

var app = express();

app.configure(function() {
  app.set('port', port);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.logger());
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.session({ secret: 'keyboard cat' }));
  app.use(express.session());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/login', routes.login);
app.post('/iniciar_session', routes.iniciar_session);
app.post('/registro',routes.registro)

server = http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

var socket_io = io.listen(server);

socket_io.sockets.on('connection',function(socket){

  socket.on('validar_disponibilidad', function(usuario){    
    routes.validar_disponibilidad_usuario(usuario,function(resultado){
      if(resultado.resultado.estado=='1'){
        socket.emit('validar_disponibilidad',{ estado: '1' });
      }else{
        socket.emit('validar_disponibilidad', {estado: '0', msj: resultado.resultado.msj })
      }
    });
  });

});
