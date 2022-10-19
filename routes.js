
const login = require('./middlewares/login')
const createAccount = require('./middlewares/create-account')

module.exports = function (app) {
  app.get('/login', login)
  app.get('/create-account', createAccount)

  app.get('/', (req, res) => {
    res.send('hello world')
  })

}