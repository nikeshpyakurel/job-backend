const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
    company: {
        type: String,
        require: [true, 'Please Provide Company Name'],
        maxlength: 50
    },
    position: {
        type: String,
        require: [true, 'Please Provide Position'],
        maxlength: 100
    },
    status: {
        type: String,
        enum: ['interview', 'declined', 'pending'],
        default: 'pending',
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        requried: [true, 'Please Provide an User']
    },
},
    { timestamps: true }

)


module.exports = mongoose.model('Job', JobSchema)