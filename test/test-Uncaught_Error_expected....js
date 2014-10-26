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
    server = app.listen(3006, done);
});

after(function () {
    server.close()
})

describe("--> Error: Uncaught Error: expected 404 \"Not Found\", got 200 \"OK\"", function () {

    it("Test case #1", function (done) {
        request = supertest('http://localhost:3006');
        request
            .get('/case404')
            .expect('Content-Type', /application.json/)
            .expect(200)
            .end(function (err, res) {
                if (err) throw err;
                done();
            });
    })

});