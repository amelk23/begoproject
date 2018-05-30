var should = require("should");
var mongoose = require('mongoose');
var request = require('request');
var expect = require('chai').expect;
var Account = require('../app_server/models/account.js');
var db;

describe('Router Check', function() {
    //Check for home page after login
    //Should be status 500 since unauthorized
    var url1 = "http://localhost:3000/Homelogin";

    it("Returns status 500", function(done) {
      request.get(url1, function(error, res, body) {
        expect(res.statusCode).to.equal(500);
        done();
      });
    });

    //Check for about us page
    var url2 = "http://localhost:3000/aboutus";
    it("Returns status 200", function(done) {
        request.get(url2, function(error, res, body) {
          expect(res.statusCode).to.equal(200);
          done();
        });
    });

    //Check for about us page
    var url3 = "http://localhost:3000/Random";
    it("Returns status 404", function(done) {
        request.get(url3, function(error, res, body) {
            expect(res.statusCode).to.equal(404);
          done();
        });
    });
});
