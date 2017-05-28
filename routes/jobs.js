/**
 * Created by ericpqmor on 27/05/17.
 */

const express = require("express");
const router = express.Router();
const Job = require("../models/job");
//Going to require database



//INDEX - Show all jobs
router.get("/", function (req, res) {
   //Get all jobs from DB
    Job.find({}, function(err, allJobs) {
        if(err) {
            req.flash("error", err.message);
        } else {
            res.json({jobs:allJobs});
        }
    });
});

//CREATE - Add new job to database
router.post("/", function (req, res) {
   //get data from forms and add to jobs array
    const name = req.body.name;
    const image = req.body.image;
    const desc = req.body.description;

    //FIXME think better about how to get enum from form
    const category = req.body.category;

    const newJob = {name: name, image: image, description: desc, category: category}

    //Create a job and save it to DB
    Job.create(newJob, function (err, newlyCreated) {
       if(err) {
           console.log(err);
       } else {
           console.log(newlyCreated);
       }
    });
});

//NEW - show form to create new job
router.get("/new", function (req, res) {
   res.render("jobs/new");
});

//SHOW - shows more info about one job
router.get("/:id", function (req, res) {
   //find the job with the provided id
    Job.findById(req.params.id).exec(function (err, foundJob) {
       if(err) {
           console.log(err);
       } else {
           res.json({job: foundJob});
       }
    });
});

//EDIT JOB ROUTE
router.get("/", function (req, res) {
   //find the job by ID
    Job.findById(req.params.id).exec(function (err, foundJob) {
       if(err) {
           console.log(err);
       } else {
           res.json({job: foundJob});
       }
    });
});

//UPDATE JOB ROUTE
router.put("/:id", function (req, res) {
   //find and update the correct job
    Job.findByIdAndUpdate(req.params.id, function(err, updatedJob){
       if(err) {
           console.log(err);
           res.redirect("/");
       } else {
           //redirect somewhere - project page
           res.redirect("/");
       }
    });
});

//DESTROY JOB ROUTE
router.delete("/:id", function (req, res) {
   Job.findByIdAndRemove(req.params.id, function (err) {
      if(err) {
          res.redirect("/");
      } else {
          res.redirect("/");
      }
   });
});

module.exports = router;