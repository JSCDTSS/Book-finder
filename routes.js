
const login = require('./middlewares/login')
const createAccount = require('./middlewares/create-account')
const auth = require('./middlewares/auth')
const checkNewAccountValid = require('./middlewares/check-new-account-valid')
const searchAccounts = require('./middlewares/search-accounts')
const verify = require('./middlewares/verify')

module.exports = function (app) {
  
  app.get('/login', login, auth)
  app.post('/create-account', checkNewAccountValid, createAccount, auth)
  app.get('/accounts', verify, searchAccounts)



}
