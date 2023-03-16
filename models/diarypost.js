const mongoose = require('mongoose')

const diarypostSchema = mongoose.Schema({
    title: String,
    text: String
})

module.exports = mongoose.model('diarypost', diarypostSchema)