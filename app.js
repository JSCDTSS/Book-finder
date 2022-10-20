
const express = require('express')
const routes = require('./routes')
const MongoDb = require('./mongoDb')

const app = express()
app.use(express.json())

MongoDb.connect(function (err, client) {
    if (err) console.log(err)
    else app.set('database', new MongoDb(client.db('Book-Finder')))
})

routes(app)

app.listen(3000)
console.log("Express on 3000")

module.exports = app