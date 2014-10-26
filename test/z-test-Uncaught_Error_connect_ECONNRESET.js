/**
 * Created by theotheu on 16-10-14.
 */
var should = require('should'),
    supertest = require('supertest'),
    express = require('express'),
    server, i = 0;
;

before(function (done) {
    var express = require('express');
    var app = express();
    app.get('/case1', function (req, res) {
        res
            .set("Content-type", "application/json")
            .send({ msg: i });
    });
    server = app.listen(30055, done);
});

after(function () {
    server.close()
});

request = supertest('http://localhost:30055');

describe("--> Error: Uncaught Error: connect ECONNRESET\n", function () {

    it("Test case #1", function (done) {

        var fn = function () {
            i++;
            request
                .get('/case1')
                .end(function (err, res) {
                    if (err) throw err;
                    fn();
                });

            request
                .get('/case1')
                .end(function (err, res) {
                    if (err) throw err;
                    fn();
                    // FIXME: add done();
                });
        }

        fn();

    });


});