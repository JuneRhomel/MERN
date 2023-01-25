const mongoose = require("mongoose")

const User = new mongoose.Schema(
    {
    name: {type: String, require: true},
    email: {type: String, require: true, unique:true},
    password: {type: String, require: true},
    quotes: {type: String}
    },
    {collation: 'user-data'}
)
const model = mongoose.model('UserData', User)

module.exports = model