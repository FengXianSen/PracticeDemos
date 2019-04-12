var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.send('hello, this is a users login page!');
});

module.exports = router;