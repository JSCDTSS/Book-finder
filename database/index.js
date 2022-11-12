
const Accounts = require('./accounts')
const Bookshelves = require('./bookshelves')

module.exports = class Database {
  constructor(database) {
    this.accounts = new Accounts(database)
    this.bookshelves = new Bookshelves(database)
  }
}

