
module.exports = class Bookshelves {
  constructor(data) {
    this.data = data
  }

  //figure out how to best access the data 
  //of each collection
  async create(ownerId,name){
    if (!name) throw new Error('Bookshelves need a name')
    ownerId = ObjectId(ownerId)
    const result = await this.bookshelves.insertOne({ ownerId, name, books: [] })
    const bookshelfId = result.insertedId
    return this.accounts.updateOne( 
      { _id: ownerId }, { $push: { bookshelves: bookshelfId }}
    )
  }

  async remove(){

  }

  async addBook(){

  }

  async removeBook(){

  }

}