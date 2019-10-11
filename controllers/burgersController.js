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

router.put("/api/burgers/:id", function(req, res) {
    console.log("Request: ", req)
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.updateOne("devoured", req.body.devoured, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  })
module.exports = router;