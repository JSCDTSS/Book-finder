

module.exports = async function (req, res) {
  console.log(req.account)
  const permissions = {
    dummy:'data'
  }
  const token = jwt.sign(permissions,secret)
  console.log(token)
  res.json({ok: true, token})
}