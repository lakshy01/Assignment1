
const route = require('express').Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');

// fetching all the users
route.get('/users', (req, res) => {
    User.find({}).then((users) => {
        res.status(200).send(users);
    }).catch((err) => {
        res.status(500).send({ error: err });
    })
})

// posting all the users
route.post('/users', (req, res) => {
    let user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.message = req.body.message;
    user.save((err, doc) => {
        if (!err) {
            res.status(201).send(doc);
        } else {
            res.status(501).send({ error: err });
        }
    })
})

exports = module.exports = route;