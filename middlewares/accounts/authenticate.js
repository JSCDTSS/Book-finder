require('dotenv').config()
const jwt = require('jsonwebtoken')
const secret = process.env.TOKEN_SECRET

module.exports = async function (req, res) {
  const {
    _id, permissions
  } = req.account
  const tokenBody = { _id, permissions }
  const token = jwt.sign(tokenBody, secret)
  res.json({ ok: true, token })
}
