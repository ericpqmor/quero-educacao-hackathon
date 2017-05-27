/**
 * Created by ericpqmor on 27/05/17.
 */

var mongoose = require("mongoose");

var jobSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    category: {
        type: String,
        enum : ['PONTUAL', 'CYCLIC'],
        default: 'PONTUAL'
    }/*,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    }*/
});