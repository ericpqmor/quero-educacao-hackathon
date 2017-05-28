/**
 * Created by ericpqmor on 27/05/17.
 */

const express = require("express");
const router = express.Router();
const Job = require("../models/job");
const History = require("../models/history");
const middleware = require("../middleware");
//Going to require database

//INDEX

// Show all jobs
//INDEX - Show all jobs
router.get("/", function (req, res) {
   //Get all jobs from DB
    Job.find({}, function(err, allJobs) {
        if(err) {
            console.log(err);
            //req.flash("error", err.message);
        } else {
            res.json({jobs:allJobs});
        }
    });
});

// Show all the history
router.get("/history", function (req, res) {
    console.log('Get on history');
    //Get all jobs from history DB
    History.find({}, function (err, allJobs) {
        if(err) {
            console.log(err);
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
    const description = req.body.description;
    const category = req.body.category;
    const money = req.body.money;

    const newJob = {name: name, image: image, description: description, category: category, money: req.body.money};

    //Create a job and save it to DB
    Job.create(newJob, function (err, newlyCreated) {
       if(err) {
           res.send(err);
           console.log(err);
       } else {
           res.send(newlyCreated);
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
    Job.findByIdAndUpdate(req.params.id, req.body, function(err, updatedJob){
       if(err) {
           res.send({});
       } else {
           //redirect somewhere - project page
           res.send(updatedJob);
       }
    });
});

//DESTROY JOB ROUTE
router.delete("/:id", function (req, res) {

    foundJob = Job.findById(req.params.id).exec(function (err, foundJob) {
        if (err) {
            console.log(err);
        } else {
            console.log("found the job to be destroyed");
        }
    });

    History.create(foundJob, function (err, newlyArchived) {
                if(err) {
                    res.send(err);
                    console.log(err);
                } else {
                    Job.findByIdAndRemove(req.params.id, function (err) {
                        if(err) {

                        } else {
                            console.log("Done");
                        }
                    });
                  //  res.send(newlyArchived);
                }
            });
            res.send({job: foundJob});
});

//DESTROY HISTORY ROUTE
router.delete("/history/:id", function (req, res) {
    History.findByIdAndRemove(req.params.id, function (err) {
        if(err) {
            res.send(err);
        } else {
            res.send('Done');
        }
    });
});

module.exports = router;