var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.delete('/', function (req, res) {
    res.send('Got a Delete request at /user');
});

module.exports = router;
