require('dotenv').config()
const jwt = require('jsonwebtoken')
const secret = process.env.TOKEN_SECRET

module.exports = async function (req, res) {
  const token = {
    
  }

  res.json({ 
    ok: true,
  })
}