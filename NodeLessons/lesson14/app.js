// 轻松创建NodeJS服务器
// HTTP服务端


var http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Node.js is very good</h1>');
    res.end('<p>Hello World</p>');
});

server.listen(port, hostname, () => {
    console.log(`服务器运行在 http://${hostname}:${port}/`);
});

console.log('HTTP server is listening at port 3000.');