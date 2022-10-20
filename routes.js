
const login = require('./middlewares/login')
const createAccount = require('./middlewares/create-account')
const auth = require('./middlewares/auth')
const checkNewAccountValid = require('./middlewares/check-new-account-valid')

module.exports = function (app) {
  app.get('/login', login, auth)
  app.post('/create-account', checkNewAccountValid, createAccount)

  app.get('/', (req, res) => {
    res.send('hello world')
  })

}

/**
 * user has filled out create account form
 *    check that account info is valid
 */