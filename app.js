/**
 * Created by ericpqmor on 27/05/17.
 */

const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const exphbs  = require('express-handlebars');
const winston = require('winston');

const routes = require('./routes');

//Set view engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');

//BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/dashboard', express.static('./public'));

//Loading all the routes
app.use(routes);

app.listen(3000, function (req, res) {
    console.log("We are going to win this hackathon");
});


