
const express = require('express')
const { MongoClient } = require('mongodb')
const routes = require('./routes')
const Database = require('./database/database')

const path = 'mongodb://localhost:27017'
const config = { useNewUrlParser: true, useUnifiedTopology: true }
const port = process.env.PORT
const app = express()

MongoClient.connect(path, config, function (err, client) {
  if (err) console.log(err)
  else app.set('database', new Database(client.db('Book-Finder')))
})

app.use(express.json())
routes(app)
app.listen(port)
console.log("Express on " + port)

module.exports = app

/**
 * merge with main
 */