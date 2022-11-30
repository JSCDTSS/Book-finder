
const { ObjectId } = require('mongodb')

/**
 * Bookshelves for future release
 */
module.exports = class Bookshelves {
  constructor(database) {
    this.database = database
  }

  get bookshelves() { return this.database.collection('Bookshelves') }

  async list(filter = {}, projection = {}) {
    try {
      if (filter._id) {
        filter._id = ObjectId(filter._id)
      }
      const bookshelves = await this.bookshelves.find(filter)
        .project(projection).toArray()
      return bookshelves.map(bookshelf => {
        bookshelf._id = bookshelf._id.toString()

        return bookshelf
      })
    }
    catch (err) {
      throw new Error('failed to list bookshelves')
    }
  }

  async create(ownerId, name) {
    if (!name) throw new Error('Bookshelves need a name')
    const result = await this.bookshelves.insertOne({ ownerId, name, books: [] })
    if (result.insertedId) {
      return result.insertedId.toString()
    } else {
      throw new Error('failed to create bookshelf')
    }
  }

  async remove(bookshelfId) {
    this.bookshelves.deleteOne({ _id: ObjectId(bookshelfId) })
  }

  async addBook(bookshelfId,book) {
    const result = await this.bookshelves.updateOne(
      { _id: ObjectId(bookshelfId) }, { $push: { books: book } }
    )
    return result?.acknowledged
  }

  async removeBook(bookshelfId) {
    const result = await this.bookshelves.updateOne(
      { _id: ObjectId(bookshelfId) }, { $push: { books: book } }
    )
    return result?.acknowledged
  }

}