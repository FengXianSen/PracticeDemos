//  计算N毫秒内在线活跃的用户

var express = require('express');
var redis = require('redis');

var db = redis.createClient();
var app = express();

app.use(function (req, res, next) {
    var min = 60 * 1000;
    var ago = Date.now() - min;
    db.zrevrangebyscore('online', '+inf', ago, function (err, users) {
        if (err) return next(err);
        req.online = users;
        next();
    });
});

app.get('/', function (req, res) {
    res.send(req.online.length + 'users online');
}).listen(3000);

