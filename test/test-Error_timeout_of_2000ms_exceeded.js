/**
 * Created by theotheu on 16-10-14.
 */
var express = require('express')
    , should = require('should')
    , supertest = require('supertest')
    ;

before(function (done) {
    var express = require('express');
    var app = express();
    app.get('/case1', function (req, res) {
    });
    server = app.listen(3017, done);
});

after(function () {
    server.close()
});

describe("--> Error: timeout of 2000ms exceeded.\n", function () {
    request = supertest('http://localhost:3017');
    it("Test case #1", function (done) {
        request
            .get("/case1")
            .end(function (err, res) {
                done();
            });
    });
    it("Test case #2", function (done) {
        request
            .get("/case1")
            .end(function (err, res) {
            });
    });

});
