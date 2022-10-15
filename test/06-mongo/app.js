const express = require("express");
const path = require("path");
const { MongoClient } = require('mongodb')

const app = express();

MongoClient.connect('mongodb://localhost:27017',
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (err, client) {
        app.set('database', client.db('myTestDb'))
    }
)

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static("./public"));

app.use('/list', (req, res) => {
    app.set('database').collection('students').find({}).toArray(
        function (err, docs) {
            if (err) console.error(err)
            res.json(docs)
        }
    )
})

app.use('/add', (req, res) => {
    app.set('database').collection('students').insertOne(
        req.query,
        function (err, response) {
            console.log(response)
            if (err) console.error(err)
            if (response.insertedCount === 1) {
                res.json({ msg: "Successfully Added" + response.insertedId })
            } else res.json({ msg: "Not Found" })
        }
    )
})

app.use('/', (req, res) => {
    console.log('hello')
    res.json('hello')
})

app.listen(3000);

console.log("Express on 3000");

module.exports = app;
