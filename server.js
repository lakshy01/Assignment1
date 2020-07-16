
require('./models/db');
const express = require('express');
const apiRoute = require('./routes/api');

// creating the server
const app = express();

// parsers for getting the data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// calling the route
app.use('/api', apiRoute);

app.listen(3000, () => console.log("Server start runing..."));