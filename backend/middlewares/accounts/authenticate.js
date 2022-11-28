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

  console.log(req.account)

  const tokenBody = { _id }
  const token = jwt.sign(tokenBody, secret)
  
  res.json({
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
