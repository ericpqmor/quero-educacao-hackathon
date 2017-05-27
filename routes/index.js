/**
 * Created by ericpqmor on 27/05/17.
 */
const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.render('index');
});