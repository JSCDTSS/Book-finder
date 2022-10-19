
const express = require("express")
const path = require("path")
const { MongoClient } = require('mongodb')

const app = express()

MongoClient.connect('mongodb://localhost:27017',
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (err, client) {
        app.set('database', client.db('myTestDb'))
    }
)

app.use(express.static("./public"))
app.use('/', (req, res) => {
    res.json('404')
})

app.listen(3000)

console.log("Express on 3000")

module.exports = app
