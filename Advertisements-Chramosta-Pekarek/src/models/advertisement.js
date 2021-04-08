const mongoose = require('mongoose')

const Advertisement = mongoose.model('Advertisement', {
    topic: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        trim: true
    }
    // owner: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'User'
    // }
})

module.exports = Advertisement