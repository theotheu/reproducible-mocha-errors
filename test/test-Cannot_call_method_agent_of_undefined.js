/**
 * Test case 6
 */
var request = require('supertest');
describe("--> TypeError: Cannot call method 'agent' of undefined\n", function () {
    it("Test case #1", function (done) {
        var request = request.agent("http://api.openweathermap.org");
        request// FIXME: hoisting of `request` set the value to `undefined`. The variable is redefined and set to `undefined`.
            .get("/data/2.5/weather?q=London,uk")
            .expect(200)
            .expect('Content-Type', /text.html/)
            .end(function(err, res) {

                JSON.parse(res.text).should.have.property('coord');
                JSON.parse(res.text).should.have.property('sys');

                done();
            });
    });
});
