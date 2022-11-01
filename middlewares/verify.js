require('dotenv').config()
const jwt = require('jsonwebtoken')
const secret = process.env.TOKEN_SECRET

module.exports = function verifyTokenPermission(permission) {
  return function (req, res, next) {
    try {
      saveReqToken(req)
      
      if (req.token.permissions.includes(permission)){
        next()
      } else {
        res.status(403).json({ok : false, error: 'insufficient permissions'})
      }
    } catch (err) {
      res.status(401).json({ ok: false, error: 'invalid authorization' })
    }
  }
}

function saveReqToken(req){
  const { authorization } = req.headers
  const token = authorization.split(' ')[1]
  req.token = jwt.verify(token, secret)
}