/**
 * Created by ericpqmor on 28/05/17.
 */

const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
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

module.exports = mongoose.model("History", jobSchema);