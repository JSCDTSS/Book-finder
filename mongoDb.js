
const { ObjectId } = require('mongodb')
const { isStringAnEmail } = require('./utils.js')

module.exports = class MongoDb {
  constructor(database) {
    this.database = database
  }

  get accounts() { return this.database.collection('Accounts') }
  get bookshelves() { return this.database.collection('Bookshelves') }

  async getAccounts(filter = {}) {
    if (typeof filter._id === 'string') {
      filter._id = ObjectId(filter._id)
    }
    console.log(filter)
    const accounts = await this.accounts.find(filter).toArray()
    return accounts.map(account => {
      account._id = account._id.toString()
      return account
    })
  }


  async createAccount(account) {
    const result =  this.accounts.insertOne(account)
    if (result.insertedId) {
      result.insertedId = result.insertedId.toString()
    }
    return result
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

  async createBookshelf(ownerId,name){
    if (!name) throw new Error('Bookshelves need a name')
    ownerId = ObjectId(ownerId)
    const result = await this.bookshelves.insertOne({ ownerId, name, books: [] })
    const bookshelfId = result.insertedId
    return this.accounts.updateOne( 
      { _id: ownerId }, { $push: { bookshelves: bookshelfId }}
    )
  }



}

