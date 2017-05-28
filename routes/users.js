
/**
 * Created by ericpqmor on 28/05/17.
 */

const express = require("express");
const router = express.Router();
const User = require("../models/user");
const middleware = require("../middleware");

//Show all the users
router.get("/", function(req, res){
    //Get all users from DB
    User.find({}, function(err, allUsers) {
        if(err) {
            console.log(err);
            //req.flash("error", err.message);
        } else {
            res.json({user:allUsers});
        }
    });
});