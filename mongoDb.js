
const { MongoClient, ObjectId } = require('mongodb')

const path = 'mongodb://localhost:27017'
const config = { useNewUrlParser: true, useUnifiedTopology: true }

module.exports = class MongoDb {
  static connect(callback) {
    MongoClient.connect(path, config, callback)
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

  createAccount(account) {
    return this.accounts.insertOne(account)
  }

}

