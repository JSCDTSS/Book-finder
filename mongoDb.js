
const { MongoClient } = require('mongodb')

const path = 'mongodb://localhost:27017'
const config = { useNewUrlParser: true, useUnifiedTopology: true }

module.exports = class MongoDb {
  static connectToExpress(app) {
    MongoClient.connect(
      path, config,
      function (err, client) {
        if (err) console.log(err)
        else {
          const database = client.db('Book-Finder')
          app.set('database', new MongoDb(database))
        }
      }
    )
  }

  constructor(database) {
    this.database = database
  }

  getAllAccounts() {
    return new Promise((resolve, reject) => {
      this.database.collection('Accounts').find({}).toArray(
        function (err, docs) {
          if (err) reject(err)
          else resolve(docs)
        }
      )
    })
  }
}