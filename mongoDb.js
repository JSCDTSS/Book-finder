
const { ObjectId } = require('mongodb')
const { isStringAnEmail } = require('./utils.js')

module.exports = className MongoDb {
  constructor(database) {
    this.database = database
  }

  get accounts() { return this.database.collection('Accounts') }
  get bookshelves() { return this.database.collection('Bookshelves') }

  objectIdToString(objectId) {
    return objectId.toString()
  }

  async getAccounts(filter = {}) {
    const accounts = await this.accounts.find(filter).toArray()
    return accounts.map(account => {
      account._id = this.objectIdToString(account._id)
      return account
    })
  }

  async getAccountById(id) {
    const account = await this.accounts.findOne({ _id: ObjectId(id) })
    account._id = this.objectIdToString(account._id)
    return account
  }

  createAccount(account) {
    return this.accounts.insertOne(account)
  }

  updateAccount(id, newFields) {
    return this.accounts.updateOne(
      { _id: ObjectId(id) }, { $set: { ...newFields } }
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

