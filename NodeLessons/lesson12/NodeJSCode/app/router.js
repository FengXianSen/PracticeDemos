var fs = require('fs');

function route(handle, pathname, res, req) {
	console.log('About to route a request for' + pathname);

	if (typeof handle[pathname] === 'function') {
		handle[pathname](res, req);
	} else {
		console.log('No request handler found for' + pathname);
		
		var content = fs.readFileSync('./views/404.html');
		res.writeHead(404, {'Content-Type': 'text/html'});
		res.write(content);
		res.end();	
	}
}

exports.route = route;
