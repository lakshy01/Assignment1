
const mongoose = require('mongoose');

// schema for the page
let userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    message: {
        type: String
    }
})

// dispatching the schema out
mongoose.model('User', userSchema);