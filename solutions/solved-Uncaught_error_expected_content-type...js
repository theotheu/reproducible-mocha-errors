/**
 * Created by theotheu on 16-10-14.
 */
var should = require('should'),
    supertest = require('supertest'),
    express = require('express'),
    server
    ;

before(function (done) {
    var express = require('express');
    var app = express();
    app.get('/case1', function (req, res) {
        res
            .set("Content-type", "application/json")
            .send({ msg: true });
    });
    server = app.listen(3003, done);
});

after(function () {
    server.close()
})

describe("--> Solved: Uncaught Error: expected \"Content-Type\" matching /application.json/, got \"application/json; charset=utf-8\"", function () {

    it("Test case #1", function (done) {
        request = supertest('http://localhost:3003');
        request
            .get('/case1')
            .expect('Content-Type', /application.json/)// SOLVED: application/json is the proper content-type
            .end(function (err, res) {
                if (err) throw err;
                done();
            });
    })

});