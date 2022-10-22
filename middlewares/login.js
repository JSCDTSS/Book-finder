
const bcrypt = require('bcrypt')

module.exports = async function (req, res, next) {
  const loginInfo = req.query
  const { database } = req.app.locals.settings

  try {
    req.account = await getAccountByUniqueId(loginInfo.uniqueId, database)
    const isPasswordValid =
      await bcrypt.compare(loginInfo.password, req.account.password)
    if (isPasswordValid) {
      next()
    } else {
      res.status(401).json({ error: 'invalid credentials' })
    }
  } catch (err) {
    console.log(err)
    res.status(404).json({ error: 'could not find account' })
  }
}

async function getAccountByUniqueId(uniqueId, database) {
  const filter = (uniqueId.includes('@'))
    ? { email: uniqueId }
    : { userName: uniqueId }
  const accounts = await database.getAccounts(filter)
  if (accounts.length === 0) {
    throw new Error('account does not exist')
  } else if (accounts.length > 1) {
    throw new Error('duplicate accounts found')
  } else {
    return accounts[0]
  }
}