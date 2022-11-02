
const express = require('express')
const routes = require('./routes')
const { MongoClient } = require('mongodb')
const MongoDb = require('./mongoDb')

const path = 'mongodb://localhost:27017'
const config = { useNewUrlParser: true, useUnifiedTopology: true }

const app = express()
app.use(express.json())

MongoClient.connect(path, config, function (err, client) {
  if (err) console.log(err)
  else app.set('database', new MongoDb(client.db('Book-Finder')))
})

routes(app)

app.listen(3000)
console.log("Express on 3000")

module.exports = app