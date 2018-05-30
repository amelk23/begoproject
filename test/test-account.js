var should = require("should");
var mongoose = require('mongoose');
var Account = require('../app_server/models/account.js');
var db;

describe('Account', function() {

  before(function(done) {
    db = mongoose.connect('mongodb://localhost/test');
   done();
  });

  after(function(done) {
    mongoose.connection.close();
    done();
  });

  beforeEach(function(done) {
    var account = new Account({
      name: 'BEGO',
      email: 'Bego@project.com',
      password: 'Michaeluwa123',
      country: 'Australia',
      fieldName: ['Politic','Business','Science'],
      skills: 'database, web dev'
    }
    );
    account.save(function(error) {
      if (error) console.log('error' + error.message);
      else console.log('no error');
      done();
    });
  });
  //username is the email of an account
  it('Find a user by username', function(done) {
    Account.findOne({ email: 'Bego@project.com' }, function(err, account) {
      account.email.should.eql('Bego@project.com');
      account.should.have.property('fieldName').with.lengthOf(3);
      console.log("   username: ", account.email);
      done();
    });
  });

  afterEach(function(done) {
    Account.remove({}, function() {
      done();
    });
  });

});
