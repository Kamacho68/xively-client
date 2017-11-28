// Use the environment variable or use a given port
const PORT = process.env.PORT || 8080;

const http = require('http');
const fs = require('fs');

// Create a server, uses `handleRequest` which is function that takes
// care of providing requested data
//const server = http.createServer(handleRequest);
fs.readFile('xi_client.html', function(err, html){
	if(err){
		throw err;
	}
	const server = http.createServer(function (req, res){
		res.statusCode = 200;
		res.setHeader('Content-Type','text/html');
		res.write(html);
		res.end();
	});
	// Start the server
	server.listen(PORT, () => {
  		console.log('Server listening on: http://localhost:%s', PORT);
	});
});

