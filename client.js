var http = require('http');
var fs = require('fs');
var hostname = '127.0.0.1';
var port = 8080;

fs.readFile('xi_client.html', function(err, html){
	if(err){
		throw err;
	}
	var server = http.createServer(function (req, res){
		res.statusCode = 200;
		res.setHeader('Content-Type','text/html');
		res.write(html);
		res.end();
	});
	server.listen(port,hostname,function (){
		console.log('Server started on port ' +port);
	});
});