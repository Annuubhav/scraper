const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const config = process.env
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', require('./routes'))

const port = config.PORT || 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
