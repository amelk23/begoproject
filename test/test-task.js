var should = require("should");
var mongoose = require('mongoose');
var Task = require('../app_server/models/Task.js');
var db;
var tid; //task id

describe('Task', function() {

  before(function(done) {
    db = mongoose.connect('mongodb://localhost/test');
   done();
  });

  after(function(done) {
    mongoose.connection.close();
    done();
  });

  beforeEach(function(done) {
    var task = new Task({
      name: 'CITS3403 Task',
      member: 'Adi',
      rank: '5',
      deadline: '10-Jun-18'
    });
    tid = task._id
    task.save(function(error) {
      if (error) console.log('error' + error.message);
      else console.log('no error');
      done();
    });
  });

  it('Find a task by task id', function(done) {
    Task.findOne({ _id: tid }, function(err, task) {
      task.name.should.eql('CITS3403 Task');
      task.member.should.eql('Adi');
      task.rank.should.eql(5);
      task.deadline.toDateString().should.eql('Sun Jun 10 2018');
      console.log("   id: ", task._id);
      done();
    });
  });

  afterEach(function(done) {
    Task.remove({}, function() {
      done();
    });
  });

});