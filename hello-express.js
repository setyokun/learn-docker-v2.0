// Dependencies requirements, Express 4
var express        = require('express');
var app            = express();

app.listen(9090);
console.log('Im listening on port 9090');

// First example router
app.get('/', function(req, res) {
    res.send("Hello Express Js!");
}); 