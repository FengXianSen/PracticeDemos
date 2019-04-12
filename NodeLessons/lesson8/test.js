var app = require('./index');
var supertest = require('supertest');
var request = supertest(app);
var should = require('should');

describe('test.js', function () {
   it('should return 55 when n is 10', function (done) {
       request.get('/fib').query({n: 10}).end(function (err, res) {
           res.text.should.equal('55');
           done(err);
       })
   });

    var testFilb = function (n, statusCode, expect, done) {
        request.get('/fib').query({n: n}).expect(statusCode).end(function (err, res) {
            res.text.should.equal(expect);
            done(err);
        });
    };

    it('should equal 0 when n === 0', function (done) {
        testFilb(0, 200, '0', done);
    });

    it('should equal 1 when n === 1', function (done) {
        testFilb(1, 200, '1', done);
    });

    it('should equal 55 when n === 10', function (done) {
        testFilb(10, 200, '55', done);
    });

    it('should throw when n > 10', function (done) {
        testFilb(11, 500, 'n should <= 10', done);
    });

    it('should throw when n < 0', function (done) {
        testFilb(-1, 500, 'n should >= 0', done);
    });

    it('should throw when n is not Number', function (done) {
        testFilb('good', 500, 'n should be a Number', done);
    });

    it('should status 500 when error', function (done) {
        request.get('/fib').query({n: 100}).expect(500).end(function (err, res) {
            done(err);
        })
    });
});