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
            .set("Content-type", "text/json")
            .send({ msg: true });
    });
    server = app.listen(3004, done);
});

after(function () {
    server.close()
})

describe("--> Solved: Object #<Testagent> has no method xxx\n", function () {

    it("Test case #1", function (done) {
        request = supertest('http://localhost:3004');
        request
            .get('/case1')
            // xxx() // SOLVED: xxx() is not a method of supertest()
            .end(function (err, res) {
                if (err) throw err;
                done();
            });
    })

});