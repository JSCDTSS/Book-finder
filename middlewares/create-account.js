
const bcrypt = require('bcrypt')

module.exports = async function (req, res, next) {
  const newAccount = req.body
  const { database } = req.app.locals.settings

  const salt = await bcrypt.genSalt(10)
  const password = await bcrypt.hash(newAccount.password, salt)

  console.log(password)

  // database.createAccount(newAccount)

  res.json({ok:true})
}