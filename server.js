

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
app.get('/logout', routes.logout);
app.get('/edit_perfil', routes.edit_perfil);
app.post('/edit_avatar', routes.edit_avatar);

server = http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

var socket_io = io.listen(server);

socket_io.sockets.on('connection',function(socket){

  socket.on('generar_canal',function(datos){
    socket.datos_usuario = datos;
    socket.join(socket.datos_usuario.id_usuario);    
  });


  socket.on('validar_disponibilidad', function(usuario){    
    routes.validar_disponibilidad_usuario(usuario,function(resultado){
      if(resultado.resultado.estado=='1'){
        socket.emit('validar_disponibilidad',{ estado: '1' });
      }else{
        socket.emit('validar_disponibilidad', {estado: '0', msj: resultado.resultado.msj })
      }
    });
  });

  socket.on('edit_pass',function(datos){    
    datos.id_usuario = socket.datos_usuario.id_usuario;
    routes.edit_pass(datos, function(resultado){
      if(resultado.resultado.estado=='1'){
        socket.emit('edit_pass', { estado: '1', msj: resultado.resultado.msj });
      }else{
        socket.emit('error', {error: resultado.resultado.msj});
      }
    });
  });

});
