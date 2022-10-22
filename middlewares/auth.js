require('dotenv').config()
const jwt = require('jsonwebtoken')
const secret = process.env.TOKEN_SECRET

module.exports = async function (req, res) {
  console.log(req.account)
  const permissions = {
    isModerator: req.account.isModerator
  }
  const token = jwt.sign(permissions,secret)
  res.json({ok: true, token})
}