
const { ObjectId } = require('mongodb')
const { saltAndHash } = require('../utils')

module.exports = class Accounts {
  constructor(database) {
    this.database = database
  }

  get accounts() { return this.database.collection('Accounts') }

  async list(filter = {}, projection = {}) {
    try {
      if (filter._id) {
        filter._id = ObjectId(filter._id)
      }
      const accounts = await this.accounts.find(filter)
        .project(projection).toArray()
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
    newAccount.password = await saltAndHash(newAccount.password)
    const result = await this.accounts.insertOne(newAccount)
    if (result.insertedId) {
      return result.insertedId.toString()
    } else {
      console.log(newAccount)
      throw new Error('failed to create account')
    }
  }

  async update(id, newFields) {
    if (newFields.password) {
      newFields.password = await saltAndHash(newFields.password)
    }
    const result = await this.accounts.updateOne(
      { _id: ObjectId(id) }, { $set: { ...newFields } }
    )
    if (result.acknowledged) return true
    else throw new Error('failed update')
  }

  async getByUniqueId(uniqueId) {
    const filter = uniqueId.includes('@')
      ? { email: uniqueId } : { username: uniqueId }
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

  async addBookshelf(ownerId, bookshelfId) {
    const result = await this.accounts.updateOne(
      { _id: ObjectId(ownerId) }, { $push: { bookshelves: bookshelfId } }
    )
    return (result?.acknowledged)
  }

  async removeBookshelf(ownerId,bookshelfId){
    const result = await this.accounts.updateOne(
      { _id: ObjectId(ownerId) }, { $pull: { bookshelves: bookshelfId } }
    )
    return result?.acknowledged
  }

  async addFollower(followerId, followedId) {

    await this.accounts.updateOne(
      { _id: ObjectId(followedId) }, { $push: { followers: followerId } }
    )
    const result = await this.accounts.updateOne(
      { _id: ObjectId(followerId) }, { $push: { followedBy: followedId } }
    )
    return (result?.acknowledged)
  }

  async removeFollower(followerId, followedId) {
    await this.accounts.updateOne(
      { _id: ObjectId(followedId) }, { $pull: { followers: followerId } }
    )
    const result = await this.accounts.updateOne(
      { _id: ObjectId(followerId) }, { $pull: { followedBy: followedId } }
    )
    return (result?.acknowledged)
  }

}