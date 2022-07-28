const mysql = require("mysql");

const db = mysql.createConnection({
    host: "aws-fitness-db.clphvgvftlzr.us-west-1.rds.amazonaws.com",
    port: "3306",
    user: "admin",
    password: "Imcool123!",
    database: "",

})

db.connect(err=> {
    if (err) {
        console.log(err.message)
        return;
    }
    console.log("Database connected");

    db.query("USE ACCOUNTS");

})


module.exports = db;