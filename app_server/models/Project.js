var mongoose = require('mongoose');


var projectSchema = new mongoose.Schema(
    {
        mytasks:[[mongoose.Schema.Types.ObjectId]],
        mymembers: [[mongoose.Schema.Types.ObjectId]],
        name:{type :String, required: true},
        field: {type :String, required: true},
        location: {type: String, required: true},
        description: {type :String, required: false},
        startdate: {type: Date,
            Default: Date.now, required: true}
    }
);

module.exports = mongoose.model('Project', projectSchema);
