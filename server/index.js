var path = require('path');
var express = require('express');
var app = express();
const apiRouter = require('./routes/api');
var PORT = 3000;
var cors = require('cors');
/**
 * handle parsing request body
 */
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.get('/', function (req, res) {
    res.status(200).send('Server is running!!');
});


// catch-all route handler for any requests to an unknown route
app.use(function (req, res) { return res.status(404).send('This is not the page you\'re looking for...'); });
app.listen(PORT, function () {
    console.log("Server listening on port: ".concat(PORT, "..."));
});
module.exports = app;
