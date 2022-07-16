const express = require('express')
const inputCheck = require('./utils/inputCheck')
const db = require('./db/connection.js')
const apiRoutes = require('./routes/apiRoutes')

const PORT = process.env.PORT || 3001
const app = express()

//express middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//use apiRoutes
app.use('/api', apiRoutes)

app.use((req, res) => {
  res.status(404).end()
})

//start server after DB connection
db.connect((err) => {
  if (err) throw err
  console.log('Database connected')
  //listen
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
})
