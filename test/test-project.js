var should = require("should");
var mongoose = require('mongoose');
var Project = require('../app_server/models/Project.js');
var db;
var pid; //project id

describe('Project', function() {

  before(function(done) {
    db = mongoose.connect('mongodb://localhost/test');
   done();
  });

  after(function(done) {
    mongoose.connection.close();
    done();
  });

  beforeEach(function(done) {
    var project = new Project({
      name: 'CITS3403 Project',
      field: 'Agile Web Development',
      description: 'Testing of 3403 project',
      location: 'Australia',
      startdate: '1-Jun-18'
    });
    pid = project._id
    project.save(function(error) {
      if (error) console.log('error' + error.message);
      else console.log('no error');
      done();
    });
  });

  it('Find a project by project id', function(done) {
    Project.findOne({ _id: pid }, function(err, project) {
      project.name.should.eql('CITS3403 Project');
      project.field.should.eql('Agile Web Development');
      project.location.should.eql('Australia');
      project.startdate.toDateString().should.eql('Fri Jun 01 2018');
      console.log("   id: ", project._id);
      done();
    });
  });

  afterEach(function(done) {
    Project.remove({}, function() {
      done();
    });
  });

});
