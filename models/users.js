const mongoose = require('mongoose')

const usersSchema = mongoose.Schema({
    username: String,
    diary_post: {
        type: [mongoose.Types.ObjectId],
        ref: 'diarypost'
    }
})

module.exports = mongoose.model('users', usersSchema)