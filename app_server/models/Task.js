var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        member: {type: String, required: true},
        rank: {type: Number, required: true},
        deadline: {type :Date, required: true}
    }
);

module.exports = mongoose.model('Task', taskSchema);