//make connection to db

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'student',
  database: 'db'
});

module.exports = connection;