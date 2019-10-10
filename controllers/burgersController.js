// Inside the burgers_controller.js file, import the following:
// Express
// burger.js
var express = require("express");
var router = express.Router();
var burger = require("../models/burger")
// Create the router for the app, and export the router at the end of your file.
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    })
    //res.render("index", hbsObject);
})

router.post("/api/burgers", function(req, res) {
    console.log("holaaaa");
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, false], function(result) {
        res.json({ id: result.insertId })
    })
})
module.exports = router;