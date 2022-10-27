
const login = require('./middlewares/login')
const createAccount = require('./middlewares/create-account')
const auth = require('./middlewares/auth')
const checkNewAccountValid = require('./middlewares/check-new-account-valid')
const searchAccounts = require('./middlewares/search-accounts')
const verify = require('./middlewares/verify')
const updateAccount = require('./middlewares/update-account')
const guestAuth = require('./middlewares/guest-auth')
const updateAccountOther = require('./middlewares/update-account-other')

module.exports = function (app) {
  app.get('/login-guest', guestAuth)
  app.get('/login', login, auth)
  app.post('/create-account', checkNewAccountValid, createAccount, auth)

  app.get('/accounts', verify, searchAccounts)
  app.post('/update-account', verify, updateAccount)
  app.post('/update-account-other', verify, updateAccountOther)

}
