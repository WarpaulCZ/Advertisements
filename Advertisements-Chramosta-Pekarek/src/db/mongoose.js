const mongoose = require('mongoose')
const { db } = require('../models/advertisement')
const Advertisement = require('../models/advertisement')

mongoose.connect('mongodb://127.0.0.1:27017/Advertisement-DB', {
    useNewUrlParser: true,
    useCreateIndex: true, 
    useUnifiedTopology: true
})

