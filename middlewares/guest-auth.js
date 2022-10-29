require('dotenv').config()
const jwt = require('jsonwebtoken')
const secret = process.env.TOKEN_SECRET

module.exports = async function (req, res) {
  const tokenBody = {
    permissions: ['member', 'basic']
  }
  const token = jwt.sign(tokenBody, secret)
  res.json({ ok: true, token })
}
