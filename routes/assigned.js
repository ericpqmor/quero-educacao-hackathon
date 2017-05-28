/**
 * Created by ericpqmor on 28/05/17.
 */
const express = require("express");
const router  = express.Router({mergeParams: true});
const Job = require("../models/job");
const User = require("../models/user");
const middleware = require("../middleware");

//ASSIGN PERSON TO JOB - Assigner create
router.post("/", middleware.isLoggedIn, function (req, res) {
   Job.findById(req.params.id, function (err, job) {
      if(err){
          console.log(err);
          res.redirect("/jobs");
      } else {
          Job.create(req.body.assigned, function(err, assigned){
            if(err){
                console.log("Something went wrong");
            } else {
                //add username and e-mail to assigned
            //    assigned.id = req.
            }
          });
      }
   });
});

//REMOVE PERSON FROM JOB

module.exports = router;
