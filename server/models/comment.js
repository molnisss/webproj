const { Schema, model } = require('mongoose')

const schema = new Schema({
    profilePicPath: { type: String, required: true },
    profileName: { type: String, required: true },
    commentText: { type: String, required: true },
    status: { type: String, required: true },
    date: { type: String, required: true },
})

module.exports = model('Comment', schema)