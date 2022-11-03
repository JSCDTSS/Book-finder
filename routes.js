
const login = require('./middlewares/login')
const createAccount = require('./middlewares/create-account')
const authenticate = require('./middlewares/auth')
const checkNewAccountValid = require('./middlewares/check-new-account-valid')
const searchAccounts = require('./middlewares/search-accounts')
const verify = require('./middlewares/verify')
const updateAccount = require('./middlewares/update-account')
const guestAuth = require('./middlewares/guest-auth')
const updateAccountOther = require('./middlewares/update-account-other')
const createBookshelf = require('./middlewares/create-bookshelf')
const getUserBookshelves = require('./middlewares/get-user-bookshelves')

module.exports = function (app) {
  
  app.get('/login-guest', guestAuth)
  app.get('/login', login, authenticate)
  app.post('/create-account', checkNewAccountValid, createAccount, authenticate)

  app.get('/accounts', verify, searchAccounts)
  app.post('/update-account', verify, updateAccount)
  app.post('/update-account-other', verify, updateAccountOther)

  app.post('/bookshelves/create', verify, createBookshelf)
  app.get('/bookshelves/user', verify, getUserBookshelves)
  
}


