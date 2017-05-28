/**
 * Created by ericpqmor on 27/05/17.
 */

const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    category: {
        type: String
    },
    money: Number
    /*
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    }*/
});

module.exports = mongoose.model("Job", jobSchema);