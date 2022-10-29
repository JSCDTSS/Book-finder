
const { MongoClient, ObjectId } = require('mongodb')
const { isStringAnEmail } = require('utils.js')

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

  getAccountById(_id) {
    if (typeof _id === 'string') _id = ObjectId(_id)
    return this.accounts.findOne({ _id })
  }

  createAccount(account) {
    return this.accounts.insertOne(account)
  }

  updateAccount(_id, newFields) {
    if (typeof _id === 'string') _id = ObjectId(_id)
    return this.accounts.updateOne(
      { _id }, { $set: { ...newFields } }
    )
  }

  async getAccountByUniqueId(uniqueId) {
    const filter = isStringAnEmail(uniqueId)
      ? { email: uniqueId } : { userName: uniqueId }
    const accounts = await this.getAccounts(filter)

    switch (accounts.length) {
      case 1:
        return accounts[0]
      case 0:
        throw new Error('couldn\'t find account')
      default: // this should never happen
        throw new Error('database error: duplicate uniqueIds found')
    }
  }

}

