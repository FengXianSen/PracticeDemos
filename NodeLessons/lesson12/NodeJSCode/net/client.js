var net = require('net');

var client = net.connect({port: 8081}, function() {
	console.log('connected to server');
	
	client.write('World!\r\n');
});

client.on('data', function(data) {
	console.log('client got data from server:', data.toString());
	client.end();
});

client.on('end', function() {
	console.log('disconnected from server');
});
