/**
 * Created by theotheu on 16-10-14.
 */
var express = require('express')
    , should = require('should')
    , supertest = require('supertest')
    ;

var app = express();

app.get('/case1', function (req, res) {
    res.send({msg: false});
});

var request = supertest(app);
describe("--> Error: Uncaught AssertionError: expected 'msg' to have value 'true'.\n", function () {
    it("Test case #1", function (done) {
        request
            .get("/case1")
            .end(function (err, res) {
                JSON.parse(res.text)
                    .should.have.property('msg')
                    .and.have.equal(true);
                done();
            });
    });
});
