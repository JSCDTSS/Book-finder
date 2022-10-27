require('dotenv').config()
const jwt = require('jsonwebtoken')
const secret = process.env.TOKEN_SECRET

module.exports = function (req, res, next) {
  try {
    const { authorization } = req.headers
    const token = authorization.split(' ')[1]
    req.token = jwt.verify(token, secret)
    next()
  } catch (err) {
    res.status(401).json({ ok: false, error: 'invalid authorization' })
  }
}