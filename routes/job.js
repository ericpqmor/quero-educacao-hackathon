/**
 * Created by ericpqmor on 27/05/17.
 */

var express = require("express");
var router = express.router();
//Going to require database

//INDEX - Show all jobs
router.get("/", function (req, res) {
   //Get all jobs from DB

});

module.exports = mongoose.model("Job", jobSchema);