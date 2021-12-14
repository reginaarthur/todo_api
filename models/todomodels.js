const mongoose = require('mongoose');

const todoSchema = new mongoose.schema({
    title: String,
    description: String,
    time: Date,
    isCompleted: Boolean
})

const todoModel = mongoose.model('todos',todoSchema);

module.exports = todoModel;