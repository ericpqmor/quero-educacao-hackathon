/**
 * Created by ericpqmor on 27/05/17.
 */

const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const methodOverride = require("method-override");
const bodyParser = require('body-parser');
const exphbs  = require('express-handlebars');
const winston = require('winston');
const routes = require('./routes');
const seedDB = require("./seeds");

const Job = require("./models/job");

//requiring routes
const jobRoutes = require("./routes/jobs"),
      indexRoutes = require("./routes/index");

var url = process.env.DATABASEURL || "mongodb://localhost/";
mongoose.connect(url);

//Set view engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
seedDB();

//BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/dashboard', express.static('./public'));

//Loading all the routes
app.use("/", indexRoutes);
app.use("/jobs", jobRoutes);

app.listen(3000, function (req, res) {
    console.log("We are going to win this hackathon");
});


