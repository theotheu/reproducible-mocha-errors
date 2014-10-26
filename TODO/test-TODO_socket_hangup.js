/**
 * Created by theotheu on 16-10-14.
 * TODO: socket hangup
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
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: 'hello'}));
    });
    server = app.listen(3003, done);


    doCall();
});

after(function () {
    server.close()
})


function doCall() {
    var http = require("http");

    var options = {
        host: 'localhost',
        port: 3003,
        path: '/case1',
        method: 'GET'
    };
    console.log(options);


    http.request(options, function (response) {
        console.log(123443);

        var str = '';
        response.on('data', function (chunk) {
            str += chunk;
        });

        response.on('end', function () {
            console.log(str);
        });
    });

}

describe("--> Solved: expected \"Content-Type\" matching /application.json/, got \"text/html; charset=utf-8\"\n", function () {





    it("Test case #1", function (done) {



        request = supertest('http://localhost:3003');
        request
            .get('/case1')
            .expect('Content-Type', /application.json/)
            .end(function (err, res) {
                if (err) throw err;
                done();
            });
    })

});