/**
 * Created by theotheu on 16-10-14.
 */
var should = require('should'),
    supertest = require('supertest'),
    request = supertest;
describe("--> Solved: TypeError: Cannot read property 'should' of undefined.\n", function () {
    it("Test case #1", function () {
        var testObj = {}; // SOLVED: testObj dit have value `undefined`. `undefined` does not have properties.
        testObj.should.be.ok;
    });
});
