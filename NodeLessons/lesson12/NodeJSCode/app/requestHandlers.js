var fs = require('fs');

function home(res) {
	console.log('Request handler "home" was called');

	var content = fs.readFileSync('./views/home.html');
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(content);
	res.end();
}

function about(res) {
	console.log('Request handler "about" was called');

	var content = fs.readFileSync('./views/about.html');
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(content);
	res.end();
}

exports.home = home;
exports.about = about;
