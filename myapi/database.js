const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'netuser',
  password: '4712',
  database: 'tvt20spl'
});
module.exports = connection;