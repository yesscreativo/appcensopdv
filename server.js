var express  = require('express');
var app      = express();                               
var morgan = require('morgan');            
var bodyParser = require('body-parser');    
var cors = require('cors');
var httpProxy = require('http-proxy');
var http = require('http');

app.use(morgan('dev'));                                        
app.use(bodyParser.urlencoded({'extended':'true'}));            
app.use(bodyParser.json());                                     
app.use(cors());
 
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
 
//Proxy por si sucede error de CORS - localhost:8008/...
// var proxy = httpProxy.createProxyServer();
// http.createServer(function (req, res) {
//   //setTimeout(function () {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', '*');
//     res.setHeader("Access-Control-Allow-Headers","*");
//     proxy.web(req, res, {
//       target: 'http://18.224.228.247:8080/ApiRestParqueadero/Api'
//     });
//   //}, 500);
// }).listen(8008);
//---------------------------------


app.use(express.static('www'));
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});