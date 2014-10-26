/**
 * Created by theotheu on 16-10-14.
 */
var should = require('should'),
    supertest = require('supertest'),
    request = supertest;
describe("--> TypeError: Cannot read property 'should' of undefined.\n", function () {
    it("Test case #1", function () {
        var testObj;
        testObj.should.be.ok;
    });
});
