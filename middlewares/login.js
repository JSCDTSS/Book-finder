
module.exports = async function (req, res, next) {
  const loginInfo = req.query
  const { database } = req.app.locals.settings

  const accounts = await getAccountByUniqueId(loginInfo.uniqueId, database)
  if (accounts.length === 0) {
    return res.json({ error: 'that account doesn\'t exist' })
  } else if (accounts.length > 1) {
    throw new Error('duplicate accounts found')
  }

  if (loginInfo.password !== accounts[0].password) {
    res.json({ error: 'wrong password' })
  }
  req.account = accounts[0]

  next()
}

async function getAccountByUniqueId(uniqueId, database) {
  const filter = (uniqueId.includes('@'))
    ? { email: uniqueId }
    : { userName: uniqueId }
  return database.getAccounts(filter)

}