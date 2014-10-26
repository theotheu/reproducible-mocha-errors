/**
 * Created by theotheu on 16-10-14.
 */
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
            .set("Content-type", "application/json")// SOLVED: application/json is the proper content-type
            .send({ msg: true });
    });
    server = app.listen(3009, done);
});

after(function () {
    server.close()
})

describe("--> Solved: Uncaught Error: expected 404 \"Not Found\", got 200 \"OK\"", function () {

    it("Test case #1", function (done) {
        request = supertest('http://localhost:3009');
        request
            .get('/case404')
            .expect(404)// SOLVED: should be 404. The requested url does not exist.
            .end(function (err, res) {
                if (err) throw err;
                done();
            });
    })

});