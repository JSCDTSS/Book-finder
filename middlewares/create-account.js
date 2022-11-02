
const { saltAndHash } = require('../utils')

module.exports = async function (req, res, next) {
  const account = req.body
  const { database } = req.app.locals.settings

  const result = await database.createAccount({
    ...account,
    password: await saltAndHash(account.password),
    permissions: ['member','basic'],
    bookshelves: [],
    preferences: {
      pagesLowerBound: 0,
      pagesUpperBound: 0,
      types: [],
      genres: [],
      authors: []
    }
  })
  if (result.insertedId) {
    req.account = await database.getAccountById(result.insertedId)
    next()
  } else {
    res.status(500).json({ error: 'internal server error' })
  }

}