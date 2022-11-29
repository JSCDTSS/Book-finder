
require('dotenv').config()
const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
const routes = require('./routes')
const Database = require('./database')

const userName = process.env.MONGODB_USERNAME
const password = process.env.MONGODB_PASSWORD
const usernameEncoded = encodeURIComponent(userName)
const passwordEncoded = encodeURIComponent(password)

console.log(userName)
console.log(password)

const uri = `mongodb+srv://${usernameEncoded}:${passwordEncoded}@cluster0.n2dsm1v.mongodb.net/?retryWrites=true&w=majority`;

const config =   {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1
}
const port = 3001
const app = express()

const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', '*')
  next()
}
app.use(allowCrossDomain)

MongoClient.connect(uri, config, function (err, client) {
  if (err) {
    console.log(err)
  } else {
    app.set('database', new Database(client.db('Book-Finder')))
  }
})

app.use(express.json())
routes(app)
app.listen(port)
console.log("Express on " + port)

module.exports = app