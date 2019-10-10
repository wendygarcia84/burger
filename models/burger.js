var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        //create var string
        //create connection.query
            //call callback function inside query
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    //add parameters for the table and a callback
    insertOne: function(cols, vals, cb) {
        //create var string
        //create connection.query
            //call callback function inside query
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    }, 
    //add parameters for the table and a callback
    updateOne: function (col, col_val, condition, cb) {
        //create var string
        //create connection.query
            //call callback function inside query
        orm.updateOne("burgers", col, col_val, condition, function(res) {
            cb(res);
        });
    },
    
    deleteOne: function(condition, cb) {
        orm.deleteOne("burgers", condition, function(res) {
            cb(res);
        });
    }
}

module.exports = burger;