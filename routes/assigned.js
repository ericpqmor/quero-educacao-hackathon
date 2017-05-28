/**
 * Created by ericpqmor on 28/05/17.
 */
const express = require("express");
const router  = express.Router({mergeParams: true});
const Job = require("../models/job");
const User = require("../models/user");
const middleware = require("../middleware");
const nodemailer = require("nodemailer");

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
                //assigned.id = req
            }
          });
      }
   });
});

//SEND NOTIFICATION TO USER DA VEZ
router.post("/send", function(req, res){

    console.log("HERE");

    const foundJob = Job.findById(req.params.id, function (err, job) {
       if(err){
        console.log(err);
       } else {
           console.log('found the correct job');
       }
    });

    const foundUser = foundJob.assigned[foundJob.turn];
    console.log("found user: " + foundUser);



    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ericpqmor@gmail.com',
            pass: '81160709'
        }
    });

    const mailOptions = {
        from: 'ericpqmor@gmail.com',
        to: foundUser.email,
        subject: 'Notification from Sharet',
        text: 'Remember: ' + foundJob.description
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
});


module.exports = router;
