const mysql = require("mysql");
var express = require("express");
var router = express.Router();

const db = mysql.createConnection({
    host: "aws-fitness-db.clphvgvftlzr.us-west-1.rds.amazonaws.com",
    port: "3306",
    user: "admin",
    password: "Imcool123!",
    database: "",

})

let connected = "not yet connected"

db.connect(err=> {
    if (err) {
        console.log(err.message)
        return;
    }
    console.log("Database connected");

    db.query("USE ACCOUNTS");

})

router.route('/')
    .get((req, res) => {
    
        db.query(`INSERT INTO all_accounts (firstName, lastName, birth, currently_active) VALUES ('Brian1', 'Townsend1', '1995-05-26', true)`, function (err, result, field) {
      
            res.send;
    
        })
    })
    // .post((req, res) => {

    //     db.query(`PUT QUERY HERE`, function (err, result, field) {

    
    //     })  
    // })

module.exports = router