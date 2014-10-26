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
    server = app.listen(3222, done); // Solved: port numbers must match
});

after(function () {
    server.close()
})

describe("--> Solved: ECONNREFUSED", function () {

    it("Test case #1", function (done) {
        request = supertest('http://localhost:3222'); // Solved: port numbers must match
        request
            .get('/case1')
            .expect('Content-Type', /application.json/)
            .end(function (err, res) {
                if (err) throw err;
                done();
            });
    })

});