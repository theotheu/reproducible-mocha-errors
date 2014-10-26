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
    server = app.listen(3007, done);
});

after(function () {
    server.close()
})

describe("--> Error: expected \"Content-Type\" matching /application.json/, got \"text/html; charset=utf-8\"\n", function () {

    it("Test case #1", function (done) {
        request = supertest('http://localhost:3007');
        request
            .get('/case1')
            .expect('Content-Type', /application.json/)
            .end(function (err, res) {
                if (err) throw err;
                done();
            });
    })

});