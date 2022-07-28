const mysql = require("mysql");
var express = require("express");
var router = express.Router();
var db = require('./AWS_CONNECTION')

let connected = "not yet connected"

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