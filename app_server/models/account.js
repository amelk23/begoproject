var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Account = new Schema({
      myprojects:[[mongoose.Schema.Types.ObjectId]],
      name: {type: String, required: true},
      email: {type: String, required: true},
      password: {type: String},
      country: {type: String, required: true},
      fieldName: [{type: String, required: true}],
      skills: {type: String, required: true}
});


Account.plugin(passportLocalMongoose,{usernameField: 'email'});

module.exports = mongoose.model('Account', Account);
