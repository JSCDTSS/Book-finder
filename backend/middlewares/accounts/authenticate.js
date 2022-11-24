require('dotenv').config()
const jwt = require('jsonwebtoken')
const secret = process.env.TOKEN_SECRET

module.exports = async function (req, res) {
  const {
    _id,
    username,
    firstName,
    lastName,
    email,
    permissions,
    preferences,
    followers: following,
    followedBy
  } = req.account

  const tokenBody = { _id }
  const token = jwt.sign(tokenBody, secret)
  
  res.json({
    ok: true,
    token,
    username,
    firstName,
    lastName,
    email,
    permissions,
    preferences,
    following,
    followedBy
  })
}
