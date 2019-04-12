// httpresponse.js

var http = require('http');

var req = http.get({host: 'www.byvoid.com'});

req.on('response', function (res) {
    res.setEncoding('utf8');
    res.on('data', function (data) {
        console.log(data);
    });
});

// req.abort();  //终止正在发送的请求
// req.pause();    //暂停接受数据和发送状态
// req.resume();    //从暂停状态中恢复


