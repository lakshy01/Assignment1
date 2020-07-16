
// importing mongoose package
const mongoose = require('mongoose');

// connecting to the online cluster
mongoose.connect('mongodb+srv://checker:Welcome@123@cluster0.hitto.mongodb.net/testdb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err) {
        console.log("mongodb connected!!!");
    } else {
        console.log("error in the DB connection", err);
    }
});

// importing the schema
require('./detail');