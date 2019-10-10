var connection = require("./connection.js");

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
// Export the ORM object in module.exports.

var orm = {
    //add parameters for the table and a callback
    selectAll: function(tableInput, cb) {
        //create var string
        var queryString = "SELECT * FROM " + tableInput + ";";
        //create connection.query
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
            //call callback function inside query
    },
    //add parameters for the table and a callback

// INSERT INTO burgers (burger_name, devoured) VALUES ("Big Mac", false),

    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
    
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
    
        console.log(queryString);
        
        connection.query(queryString, vals, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      }, 
    //add parameters for the table and a callback

    //UPDATE burgers SET burger_name = "Whopper Jr" WHERE id = 2;
    updateOne: function (table, col, col_val, condition, cb) {
        //create var string
        //create connection.query
            //call callback function inside query
        var queryString = "UPDATE " + table + " SET " + col + " = " + col_val + " WHERE " + condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if(err) {
                throw err;
            }

            cb(result);
        });
    }, 
//DELETE FROM burgers WHERE id = 3;
    deleteOne: function(table, condition, cb) {
        var queryString = "DELETE FROM " + table + " WHERE " + condition;

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
}

module.exports = orm;