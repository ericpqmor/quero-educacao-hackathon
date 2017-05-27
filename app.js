/**
 * Created by ericpqmor on 27/05/17.
 */

var express = require('express');
var app = express();

app.get("/", function (req, res) {
   res.send("this will be the landing page");
});



app.listen(3000, function (req, res) {
    console.log("We are going to win this hackathon");
});


