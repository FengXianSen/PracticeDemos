var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {
    res.send('this is a test');
});