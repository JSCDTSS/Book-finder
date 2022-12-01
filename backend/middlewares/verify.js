require('dotenv').config()
const jwt = require('jsonwebtoken')
const secret = process.env.TOKEN_SECRET

module.exports = async function verify(req, res, next) {
  try {
    const { database } = req.app.locals.settings
    const { authorization } = req.headers
    const token = authorization.split(' ')[1]
    const accountId = jwt.verify(token, secret)._id
    req.account = (await database.accounts.list({ _id: accountId }))[0]
    if (req.account.isSuspended){
      return res.status(403).json({ ok: false, error: 'this account has been suspended' })
    }
    next()
  } catch (err) {
    res.status(401).json({ ok: false, error: 'invalid authorization' })
  }
}

