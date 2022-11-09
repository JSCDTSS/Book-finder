
const login = require('./middlewares/login')
const createAccount = require('./middlewares/create-account')
const authenticate = require('./middlewares/authenticate')
const checkNewAccountValid = require('./middlewares/check-new-account-valid')
const searchAccounts = require('./middlewares/search-accounts')
const verify = require('./middlewares/verify')
const updateAccount = require('./middlewares/update-account')
const guestAuth = require('./middlewares/guest-auth')
const updateAccountOther = require('./middlewares/update-account-other')
const createBookshelf = require('./middlewares/create-bookshelf')
const getUserBookshelves = require('./middlewares/get-user-bookshelves')
const deleteBookshelf = require('./middlewares/delete-bookshelf')

module.exports = function (app) {

  app.get('/guest-login', guestAuth)
  app.get('/accounts/login', login, authenticate)
  app.post('/accounts/create', checkNewAccountValid, createAccount, authenticate)

  app.get('/accounts/list', verify, searchAccounts)
  app.post('/accounts/update-self', verify, updateAccount)
  app.post('/accounts/update-other', verify, updateAccountOther)

  app.get('/bookshelves/user', verify, getUserBookshelves)
  app.post('/bookshelves/create', verify, createBookshelf)
  app.post('/bookshelves/delete', verify, deleteBookshelf)

  /*
  add endpoints
    delete bookshelf
    add to bookshelf
    remove from bookshelf
    delete bookshelf
    community features
    add friend, remove friend
  */
}
