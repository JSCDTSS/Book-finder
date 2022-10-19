
const { MongoClient, ObjectId } = require('mongodb')

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

  get accounts() { return this.database.collection('Accounts') }
  get bookshelves() { return this.database.collection('Bookshelves') }

  getAccounts(filter = {}) {
    return this.accounts.find(filter).toArray()
  }

  getAccountById(id) {
    return this.accounts.find({ _id: ObjectId(id) }).toArray()
  }

  addAccount(account) {
    return this.accounts.insertOne(account)
  }

  

}

