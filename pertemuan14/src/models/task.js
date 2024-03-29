
const mongoose = require('mongoose')
const validator = require('validator')

const taskSchema  = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        require: true
    }
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task