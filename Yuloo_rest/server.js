var whole = require('./api.js');
var port = 5001;
var http =require('http');

http.createServer(whole).listen(port,function(){
	console.log('Express Listening On Port' + port)
});