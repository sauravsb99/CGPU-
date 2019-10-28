const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'sauravsb99',
  password: '',
  // database: 'database name'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});