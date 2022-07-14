const express = require('express')
const mysql = require('mysql2')

const PORT = process.env.PORT || 3001
const app = express()

//express middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
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

//routes
app.get('/', (req, res) => {
  res.json({
    message: 'hello world',
  })
})

// db.query(`SELECT * FROM candidates`, (err, rows) => {
//   console.log(rows)
// })

// db.query(`SELECT * FROM candidates where id =1 `, (err, row) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(row)
//   }
// })

// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//   if (err) {
//     console.log(err)
//   }
//   console.log(result)
// })

// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
// VALUES (?,?,?,?)`
// const params = [1, 'Ronald', 'Firbank', 1]
// db.query(sql, params, (err, result) => {
//   if (err) {
//     console.log(err)
//   }
//   console.log(result)
// })

//Default response for any other request (Not Found)
//Because this is a catchall route, its placement is very important. What happens to the GET test route if we place this route above it?This route will override all others—so make sure that this is the last one.

app.use((req, res) => {
  res.status(404).end()
})

//listen
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
