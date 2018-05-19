var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var passportLocalMongoose = require('passport-local-mongoose');

var Account = new Schema({
      name: {type: String, required: true},
      email: {type: String, required: true},
      password: {type: String, required: true},
      country: {type: String, required: true},
      fieldName: {type: String, required: true}
});


//Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account);
