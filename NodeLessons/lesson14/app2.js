// HTTP客户端


var http = require('http');
var queryString = require('querystring');

var contents = queryString.stringify({
    name: 'byvoid',
    email: 'byvoid@byvoid.com',
    address: 'zhejiang,guojiadaxueekjiyuan'
});

var options =  {
    host: 'www.byvoid.com',
    path: '/application/node/post.php',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': contents.length
    }
};

var req = http.request(options, function (res) {
    res.setEncoding('utf8');
    res.on('data', function (data) {
        console.log(data);
    });
});

req.write(contents);
req.end();