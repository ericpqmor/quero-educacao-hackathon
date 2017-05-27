/**
 * Created by ericpqmor on 27/05/17.
 */
const mongoose = require("mongoose");
const Job = require("./models/job");

const data = [
    {
        name: "Clean Precious' desk",
        image: "http://www.bonde.com.br/img/bondenews/2014/03/img_1_34_6022.jpg",
        description: "Eric had a night of craaaaaazy hardcore coding and did not clean his desk. We need to clean it.",
        category: "PONTUAL"
    },
    {
        name: "Fuck Shark",
        image: "https://s-media-cache-ak0.pinimg.com/originals/2d/5a/d0/2d5ad0b06b52e577584c41e38e997771.jpg",
        description: "Exactly what you are thinking.",
        category: "PONTUAL"
    },
    {
        name: "DETERMINATION",
        image: "https://i.ytimg.com/vi/pqKg4Bg8QIE/maxresdefault.jpg",
        description: "I am going to feel myself determined. FOREVER!",
        category: "PONTUAL"
    }
];

function seedDB() {
    //Clean the job database
    Job.remove({}, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("removed jobs.");

        //add a few jobs
        data.forEach(function (seed) {
           Job.create(seed, function (err, job) {
              if(err) {
                console.log(err);
              } else {
                console.log("added a job");
              }
           }
        });
    });
}

