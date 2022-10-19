
const express = require('express')
const routes = require('./routes')
const MongoDb = require('./mongoDb')

const app = express()

MongoDb.connectToExpress(app)

routes(app)
app.listen(3000)
console.log("Express on 3000")

module.exports = app
