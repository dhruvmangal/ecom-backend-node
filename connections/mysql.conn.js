var mysql = require("mysql2");
require('dotenv').config()

var con = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PWD,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con;