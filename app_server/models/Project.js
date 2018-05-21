var mongoose = require('mongoose');

var projectSchema = new mongoose.Schema(
    {
        name:{type :String, required: true},
        field: {type :String, required: true},
        location: {type: String, required: true},
        description: {type :String, required: false},
        startdate: {type: Date,
            Default: Date.now, required: true}
        //tasks: {type: String, required: true}
    }
);

module.exports = mongoose.model('Project', projectSchema);
