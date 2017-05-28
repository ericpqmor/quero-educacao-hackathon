/**
 * Created by ericpqmor on 27/05/17.
 */
const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');

router.get('/', function(req, res) {
    res.render('index');
});

//show register form
router.get("/register", function(req, res){
   res.render("register");
});

//handle sign up logic
router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username, email: req.body.email});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
         //   req.flash("success", "Welcome to Sharet " + user.username);
            res.redirect("/");
        });
    });
});

//show login form
router.get("/login", function (req, res) {
   res.render("login");
});

//logout route
router.get("/logout", function(req, res){
   req.logout();
   //req.flash("sucess", "Logged you out!");
   res.redirect("/");
});

//handling login logic
router.post("/login", passport.authenticate("local",
    {
        successRedirect: "/",
        failureRedirect: "/login"
    }), function(req, res){
});

module.exports = router;