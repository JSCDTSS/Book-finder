
const bcrypt = require('bcrypt')

module.exports = async function (req, res, next) {
  const loginInfo = req.query
  const { database } = req.app.locals.settings

  try {
    req.account = await database.getAccountByUniqueId(loginInfo.uniqueId)
    const isPasswordValid =
      await bcrypt.compare(loginInfo.password, req.account.password)
    if (isPasswordValid) {
      next()
    } else {
      res.status(401).json({ error: 'invalid credentials' })
    }
  } catch (error) {
    res.status(404).json({ error: error.toString() })
  }
}