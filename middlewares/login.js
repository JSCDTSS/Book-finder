
module.exports = async function (req, res) {
  const { uniqueId, password } = req.query
  const { database } = req.app.locals.settings

  const accounts = await getAccountByUniqueId(uniqueId, database)
  if (accounts.length === 0) {
    return res.json({ error: 'that account doesn\'t exist' })
  } else if (accounts.length > 1) {
    throw new Error('duplicate accounts found')
  }

  res.json({ login: (password === accounts[0].password) })
}

async function getAccountByUniqueId(uniqueId, database) {
  const filter = (uniqueId.includes('@'))
    ? { email: uniqueId }
    : { userName: uniqueId }
  return database.getAccounts(filter)

}