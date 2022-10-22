
const bcrypt = require('bcrypt')

module.exports = async function (req, res, next) {
  req.account = req.body
  const { database } = req.app.locals.settings

  const salt = await bcrypt.genSalt(10)
  const password = await bcrypt.hash(req.account.password, salt)

  const result = await database.createAccount({
    ...req.account,
    password
  })
  console.log(result.insertedId.toString())
  if (result.insertedId) {
    next()
  } else {
    res.status(500).json({ error: 'internal server error' })
  }

}