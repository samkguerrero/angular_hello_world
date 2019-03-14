var express = require("express");
var bodyParser = require('body-parser');
var path = require("path");
var app = express();
var mongoose = require('mongoose');
var moment = require('moment');

app.use(express.static( __dirname + '/public/dist/public' ));
app.use(bodyParser.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app)

app.listen(8000, function() {
    console.log("listening on port 8000");
});