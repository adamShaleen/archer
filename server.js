var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('express-session');
var mongoose = require('mongoose');
var app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/public'));

// listen
app.listen(3001, function() {
    console.log("Roasting on port 3000");
});  // closing server tag
