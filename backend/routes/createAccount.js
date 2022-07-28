const mysql = require("mysql");
var express = require("express");
var router = express.Router();
var db = require('./AWS_CONNECTION')

let connected = "not yet connected"


router.route('/')
    .post((req, res) => {

        let queryString = `INSERT INTO all_accounts (firstName, lastName, birth, currently_active, account_password, username) VALUES ("` + req.body.data.firstname + `", "` + req.body.data.lastname + `", "` + req.body.data.birthdate + `", false, "` + req.body.data.password + `", "` + req.body.data.username + `")`

        db.query(queryString, function (err, result, field) {

            res.send;
    
        })  
    })

router.route('/compare')
    .post((req, res) => {
            
        let queryString2 = 'SELECT * FROM all_accounts WHERE (username = ' + `"` + req.body.data.username + `"` + `)`;
        //let queryString = `INSERT INTO all_accounts (username) VALUES ("` + req.body.data.username + `")`

        db.query(queryString2, function (err, result, field) {
            
            let account_name = result;
            console.log(req.body.data.username, "username");
            res.send(result);

        })
    })
    

module.exports = router