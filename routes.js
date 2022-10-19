
const login = require('./middlewares/login')
const createAccount = require('./middlewares/create-account')
const listAccountsTest = require('./middlewares/list-accounts-test')

module.exports = function (app) {
  app.get('/login', login)
  app.get('/list-accounts', listAccountsTest)
  app.post('/create-account', createAccount)

  app.get('/', (req, res) => {
    res.send('hello world')
  })

}