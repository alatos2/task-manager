const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'name cannot be left empty!'],
        maxLength: [20, 'name cannot be greater than 20']
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Tasks', TaskSchema);