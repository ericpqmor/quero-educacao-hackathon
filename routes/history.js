/**
 * Created by ericpqmor on 28/05/17.
 */

const express = require("express");
const router = express.Router();
const History = require("../models/history");
const middleware = require("../middleware");
//Going to require database

//Show all the history
router.get("/", function (req, res) {
    console.log('Get on history');
    // res.send({});
    //Get all jobs from history DB
    History.find({}, function (err, allJobs) {
        if(err) {
            console.log(err);
        } else {
            console.log(allJobs);
            res.json({jobs:allJobs});
        }
    });
});

//CREATE - Add new history job to database
router.post("/", function (req, res) {
    //get data from forms and add to jobs array
    const name = req.body.name;
    const image = req.body.image;
    const description = req.body.description;
    const category = req.body.category;
    const money = req.body.money;
    const turn = 0;

    const newJob = {name: name, image: image, description: description, category: category, money: req.body.money};

    //Create a job and save it to DB
    History.create(newJob, function (err, newlyCreated) {
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
    res.render("history/new");
});

//SHOW - shows more info about one job
router.get("/:id", function (req, res) {
    //find the job with the provided id
    History.findById(req.params.id).exec(function (err, foundJob) {
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
    History.findById(req.params.id).exec(function (err, foundJob) {
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
    History.findByIdAndUpdate(req.params.id, req.body, function(err, updatedJob){
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
    History.findByIdAndRemove(req.params.id, function (err, foundJob) {
        if(err) {

        } else {
            console.log("Done");
            res.send({job: foundJob});
        }
    });
});

module.exports = router;