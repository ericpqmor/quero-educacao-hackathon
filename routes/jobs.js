/**
 * Created by ericpqmor on 27/05/17.
 */

const express = require("express");
const router = express.router();
const Job = require("../models/job");
//Going to require database

//INDEX - Show all jobs
router.get("/jobs", function (req, res) {
   //Get all jobs from DB
    Job.find({}, function(err, allJobs) {
        if(err) {
            req.flash("error", err.message);
        } else {
            //Render page showing the initial group
        }
    });
});

module.exports = mongoose.model("Job", jobSchema);