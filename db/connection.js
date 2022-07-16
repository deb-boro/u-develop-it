const mysql = require('mysql2')
//connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    //your MYSQL username
    user: 'root',
    //password
    password: 'lemon817',
    database: 'election',
  },
  console.log('Connected to the election database'),
)

module.exports = db
