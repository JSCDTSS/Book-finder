
const login = require('./middlewares/login')
const createAccount = require('./middlewares/create-account')
const auth = require('./middlewares/auth')

module.exports = function (app) {
  app.get('/login', login, auth)
  app.post('/create-account', createAccount)

  app.get('/', (req, res) => {
    res.send('hello world')
  })

}