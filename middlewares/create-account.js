
const { saltAndHash } = require('../utils')

module.exports = async function (req, res, next) {
  const account = req.body
  const { database } = req.app.locals.settings

  const result = await database.createAccount({
    ...account,
    password: await saltAndHash(account.password),
    permissions: ['member', 'basic'],
    bookshelves: [],
    preferences: {
      pagesLowerBound: 0,
      pagesUpperBound: 0,
      types: [],
      genres: [],
      authors: []
    }
  })
  console.log(result)
  if (result.insertedId) {
    const result = await database.getAccounts({ _id: result.insertedId })
    req.account = result[0]
    next()
  } else {
    res.status(500).json({ error: 'internal server error' })
  }

}