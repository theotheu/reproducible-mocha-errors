/**
 * Created by theotheu on 16-10-14.
 */
var should = require('should'),
    supertest = require('supertest'),
    request = supertest('http://localhost:3000'), server;


before(function (done) {
    var express = require('express');
    var app = express();
    app.get('/base-case', function (req, res) {
        res.send({ msg: true });
    });
    app.get('/case4', function (req, res) {
        if (req.query.ok) {
            res.send({ msg: true });
        }
    });
    app.get('/case7', function (req, res) {
        res.send({ msg: false});
    });
    server = app.listen(3000, done);
});

after(function () {
    server.close()
});

describe("--> Reproducible mocha, should and supertest errors", function () {

    it("#1: TypeError: Cannot call method 'agent' of undefined", function (done) {
        var supertest = supertest.agent("http://localhost:3000");
        supertest
            .get("/base-case")
            .expect(200)
            .expect('Content-Type', /text.html/)
            .end(function (err, res) {

                JSON.parse(res.text)
                    .should.have.property('msg');
                done();
            });
    });

    it("#2: Error: ECONNREFUSED", function (done) {
        var request = supertest('http://localhost:3001');
        request
            .get('/base-case')
            .expect('Content-Type', /application.json/)
            .end(function (err, res) {
                if (err) throw err;
                done();
            });
    });

    it("#3: Error: timeout of 2000ms exceeded.", function (done) {
        request
            .get("/base-case")
            .end(function (err, res) {
            });
    });

    it("#4: Error: timeout of 2000ms exceeded.", function (done) {
        request
            .get("/case4")
            .end(function (err, res) {
            });
    });

    it("#5: Object #<Testagent> has no method fn", function (done) {
        request
            .get('/base-case')
            .fn()
            .end(function (err, res) {
                if (err) throw err;
                done();
            });
    });

    it("#6: TypeError: Cannot read property 'should' of undefined.", function () {
        var testObj;
        testObj.should.be.ok;
    });


    it("#7: Error: Uncaught AssertionError: expected 'msg' to have value 'true'", function (done) {
        request
            .get("/case7")
            .end(function (err, res) {
                JSON.parse(res.text)
                    .should.have.property('msg')
                    .and.have.equal(true);
                done();
            });
    });

    it("#8: Error: Uncaught Error: expected 404 \"Not Found\", got 200 \"OK\"", function (done) {
        request
            .get('/case404')
            .expect(200)
            .end(function (err, res) {
                if (err) throw err;
                done();
            });
    });

    it("#9: Error: expected \"Content-Type\" matching /application.json/, got \"text/html; charset=utf-8\"", function (done) {
        request
            .get('/base-case')
            .expect('Content-Type', /text.html/)
            .end(function (err, res) {
                if (err) throw err;
                done();
            });
    });

});

describe("Solutions", function () {
    return;
    it("#1 SOLVED: TypeError: Cannot call method 'agent' of undefined", function (done) {
        request
            .get("/base-case")
            .expect(200)
            .expect('Content-Type', /application.json/)
            .end(function (err, res) {

                JSON.parse(res.text)
                    .should.have.property('msg');
                done();
            });
    });

    it("#2 SOLVED: Error: ECONNREFUSED", function (done) {
        var request = supertest('http://localhost:3000');
        request
            .get('/base-case')
            .expect('Content-Type', /application.json/)
            .end(function (err, res) {
                if (err) throw err;
                done();
            });
    });

    it("#3 SOLVED: Error: timeout of 2000ms exceeded.", function (done) {
        request
            .get("/base-case")
            .end(function (err, res) {
                done();
            });
    });

    it("#4 SOLVED: Error: timeout of 2000ms exceeded.", function (done) {
        request
            .get("/case4?ok=1")
            .end(function (err, res) {
                JSON.parse(res.text)
                    .should.have.property('msg');
                done();
            });
    });

    it("#5 SOLVED: Object #<Testagent> has no method xxx", function (done) {
        request
            .get('/base-case')
            // .xxx()
            .end(function (err, res) {
                if (err) throw err;
                done();
            });
    });

    it("#6 SOLVED: TypeError: Cannot read property 'should' of undefined.", function () {
        var testObj = {};
        testObj.should.be.ok;
    });

    it("#7 SOLVED: Error: Uncaught AssertionError: expected 'msg' to have value 'true'", function (done) {
        request
            .get("/case7")
            .end(function (err, res) {
                JSON.parse(res.text)
                    .should.have.property('msg')
                    .and.have.equal(false); // SOLVED
                done();
            });
    });

    it("#8 SOLVED: Error: Uncaught Error: expected 404 \"Not Found\", got 200 \"OK\"", function (done) {
        request
            .get('/case404')
            .expect(404) // SOLVED
            .end(function (err, res) {
                if (err) throw err;
                done();
            });
    });

    it("#9 SOLVED: Error: expected \"Content-Type\" matching /application.json/, got \"text/html; charset=utf-8\"", function (done) {
        request
            .get('/base-case')
            .expect('Content-Type', /application.json/) // SOLVED
            .end(function (err, res) {
                if (err) throw err;
                done();
            });
    });

});