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
let all_accounts;

db.connect(err=> {
    if (err) {
        console.log(err.message)
        return;
    }
    console.log("Database connected");

    db.query("USE ACCOUNTS");

    db.query("SELECT * FROM all_accounts", function (err, result, field) {

        if (err) throw err;
        console.log(result)
        all_accounts = result;


    })

})

router.get("/", function(req, res, next) {

    res.send(all_accounts);

})

module.exports = router