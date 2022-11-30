
const verify = require('./middlewares/verify')
const guestAuth = require('./middlewares/guest-auth')

const login = require('./middlewares/accounts/login')
const createAccount = require('./middlewares/accounts/create-account')
const authenticate = require('./middlewares/accounts/authenticate')
const checkNewAccountValid = require('./middlewares/accounts/check-new-account-valid')
const searchAccounts = require('./middlewares/accounts/search-accounts')
const updateAccount = require('./middlewares/accounts/update-account')
const updateAccountOther = require('./middlewares/accounts/update-account-other')

const follow = require('./middlewares/accounts/follow')
const unfollow = require('./middlewares/accounts/unfollow')

module.exports = function (app) {

  app.get('/guest-login', guestAuth)
  app.get('/accounts/login', login, authenticate)
  app.post('/accounts/create', checkNewAccountValid, createAccount, authenticate)

  app.get('/accounts/list', verify, searchAccounts)
  app.post('/accounts/update-self', verify, updateAccount, authenticate)
  app.post('/accounts/update-other', verify, updateAccountOther)

  app.post('/accounts/follow', verify, follow)
  app.post('/accounts/unfollow', verify, unfollow)

}
