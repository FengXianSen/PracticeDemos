//  使用 superagent 与 cheerio 完成简单爬虫

var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');

var app = express();

app.get('/', function (req, res, next) {
    superagent.get('https://cnodejs.org/').end(function (err, sres) {
        if (err) {
            return next(err);
        }

        var $ = cheerio.load(sres.text);
        var items = [], items2 = [];
        $('#topic_list .topic_title').each(function (idx, element) {
            var $element = $(element);

            items.push({
                title: $element.attr('title'),
                href: $element.attr('href')
            });
        });

        $('#topic_list .topiclist-tab').each(function (idx, element) {
            var $element = $(element);

            items2.push({
                tag: $element.text()
            });

        });

        res.send(items.concat(items2));
        // res.send(items2);
    });
});

app.listen(3000, function (req, res) {
    console.log('app is running at port 3000');
});