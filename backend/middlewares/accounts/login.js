
const bcrypt = require('bcrypt')

module.exports = async function (req, res, next) {
  const loginInfo = req.query
  const { database } = req.app.locals.settings

  try {
    req.account = await database.accounts.getByUniqueId(loginInfo.uniqueId)
    const isPasswordValid =
      await bcrypt.compare(loginInfo.password, req.account.password)

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'invalid credentials' })
    }
    if (req.account.isSuspended) {
      return res.status(403).json({ error: 'this account is suspended' })
    }

    next()

  } catch (error) {
    res.status(404).json({ error: error.toString() })
  }
}