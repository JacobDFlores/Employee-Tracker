const mysql = require('mysql2');
const sqlPassword = require('./sqlPassword');

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: sqlPassword,
      database: 'Employee_db'
    },
    console.log(`Connected to the books_db database.`)
  );

module.exports = db;