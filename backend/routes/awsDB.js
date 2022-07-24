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

// router.get("/", function(req, res, next) {

//     res.send(all_accounts);

// })

// router.post("/", (req, res) => {

//     var test = req.body.test;
//     res.send(all_accounts, test);
//     console.log(test, "server response")

// })

let all_accounts;
let single_account;

router.route('/')
    .get((req, res) => {
        
        db.query(`SELECT * FROM all_accounts`, function (err, result, field) {

            if (err) throw err;
            console.log(result)
            all_accounts = result;
            res.send(all_accounts);
    
    
        })
    })
    .post((req, res) => {
        //`SELECT * FROM all_accounts WHERE (firstName = "Brian")`

        let queryString = 'SELECT * FROM all_accounts WHERE (username = ' + `"` + req.body.data.username + `"` + ' AND ' + "account_password" +` = "` + req.body.data.password + `"` + ')'; 

        db.query(queryString, function (err, result, field) {

            if (err) throw err;
            console.log(result)
            console.log(req.body.data.username)
            single_account = result;
            res.send(single_account)
    
    
        })  
    })

module.exports = router