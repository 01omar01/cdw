var mysql = require('mysql');
var mysql_username = 'root';
var mysql_password = '';

var client = mysql.createConnection({
  host     : 'localhost',
  user: mysql_username,
  password: mysql_password,
});

client.query("USE cdw");