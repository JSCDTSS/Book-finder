
const { isStringAnEmail } = require('../utils.js')
const { ObjectId } = require('mongodb')

module.exports = class Accounts {
  constructor(database) {
    this.database = database
  }

  get accounts() { return this.database.collection('Accounts') }

  async list(filter = {}, projection = {}) {
    try {
      const accounts = await this.accounts.find(filter).project(projection).toArray()
      return accounts.map(account => {
        account._id = account._id.toString()
        return account
      })
    }
    catch (err) {
      console.log(err)
      throw new Error('failed to list accounts')
    }
  }

  async create(newAccount) {
    const result = await this.accounts.insertOne(newAccount)
    if (result.insertedId) {
      return result.insertedId.toString()
    } else {
      console.log(newAccount)
      throw new Error('failed to create account')
    }
  }

  async update(id, newFields) {
    const result = await this.accounts.updateOne(
      { _id: ObjectId(id) }, { $set: { ...newFields } }
    )
    if (result.acknowledged) return true
    else throw new Error('failed update')
  }

  async getByUniqueId(uniqueId) {
    const filter = isStringAnEmail(uniqueId)
      ? { email: uniqueId } : { userName: uniqueId }
    const accounts = await this.list(filter)

    switch (accounts.length) {
      case 1:
        return accounts[0]
      case 0:
        throw new Error('couldn\'t find account')
      default: // this should never happen
        throw new Error('database error: duplicate uniqueIds found')
    }
  }

  async addFollower(followerId,followedId){

  }

  async removeFollower(followerId,followedId){

  }

}