const express = require('express');
const router = express.Router();
const url = require('url');
let mongoModel = require('./db/models/mongoModel');

// router.get('/sensor', (req, res) => {     console.log(req.query.kartId); let
// newEmploye = new mongoModel.Employee();     newEmploye.kartId =
// req.query.kartId,     newEmploye.firstName = 'Emin',     newEmploye.lastName
// = 'Əhədi',     newEmploye.registertime = getDate(),     newEmploye.active =
// "1";     newEmploye.save()         .then((data) => { console.log(data);
let heat = "";
// res.end();         }); });
router.get('/sensor', (req, res) => {
    console.log(req.query);

    console.log(heat)
    // const kartId = req.query.kartId;
    // console.log(kartId);
    // mongoModel
    //     .Employee
    //     .findOne({"kartId": kartId})
    //     .then((data) => {
    //         if (!data) {
    //             console.log("Kart qeydiyyatdan keçməyib");
    //             res.status(404);
    //             res.end();

    //         } else {
    //             console.log(data.firstName + " " + data.lastName);
    //             res.status(200);
    //             res.end();
    //         }
    //     })
    res.end();
});
router.get("/tempurature", function (req, res) {
    let tempurature = {
        heat: '',
        humudity: ''
    }
    tempurature.heat = 26;
    tempurature.humudity = 38;
    res.send(tempurature);
    res.end();
})

getDate = () => {
    var d = new Date();
    let rawmounth = parseInt(d.getMonth()) + 1;
    if (rawmounth < 10) {
        let zero = "0"
        rawmounth = zero.concat(rawmounth);
    }
    return d.getDate() + "." + rawmounth + "." + d.getFullYear() + "|" + d.getHours() + ":" + d.getMinutes();
}

module.exports = router