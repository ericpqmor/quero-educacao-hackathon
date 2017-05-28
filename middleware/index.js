/**62f4f417801c9570bee26ae25df4824c21929b1f
 * Created by ericpqmor on 28/05/17.
 */

const Job = require("../models/job");

//all the middleware goes here
const middlewareObj = {};

middlewareObj.isLoggedIn = function (req, res, next) {
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You need to be logged in to do that");
    res.redirect("/login");
}

module.exports = middlewareObj;