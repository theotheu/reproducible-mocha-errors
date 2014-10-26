/**
 * Created by theotheu on 16-10-14.
 */
var should = require('should'),
    supertest = require('supertest'),
    express = require('express'),
    server;
;

before(function (done) {
    var express = require('express');
    var app = express();
    app.get('/case1', function (req, res) {
        res
            .set("Content-type", "application/json")
            .send({ msg: false});
    });
    server = app.listen(3013, done);
});

after(function () {
    server.close()
});

request = supertest('http://localhost:3013');

describe("--> Solved: Uncaught Error: connect ECONNRESET\n", function () {

    it("Test case #1", function (done) {
        var finished = false; // SOLVED part 1; Introduce variable `finished` with inital value false;

        var fn = function () {
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
                    if (!finished) { // SOLVED part 2; Add condition to check if finished
                        finished = true;
                        done(); // SOLVED part 3; Call function done()
                    }

                });
        }

        fn();

    });


});