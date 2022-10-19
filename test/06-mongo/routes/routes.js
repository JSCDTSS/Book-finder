const express = require('express');

const router = express.Router();

module.exports = (app) => {

  router.get('list', (req, res) => {
    app.set('database').collection('students').find({}).toArray(
      function (err, docs) {
        if (err) console.error(err)
        res.json(docs)
      }
    )
  });

  router.get('/add', (req, res) => {
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


  return router;
}

