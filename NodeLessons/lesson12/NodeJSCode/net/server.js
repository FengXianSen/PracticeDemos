var net = require('net');

var server = net.createServer(function(socket) {
	console.log('client connected');

	socket.on('data', function(data) {
		console.log('server got data from client:', data.toString());
	});

	socket.on('end', function(data) {
		console.log('connection closed');
	});

	socket.write('Hello\r\n');
});

server.listen(8081, function() {
	console.log('server bound');
});
