
const { hash } = require('../utils')

module.exports = async function (req, res, next) {
  const account = req.body
  const { database } = req.app.locals.settings

  const result = await database.createAccount({
    ...account,
    isModerator: false,
    password: await hash(account.password),
    preferences: {
      pagesLowerBound: 0,
      pagesUpperBound: 0,
      types: [],
      genres: [],
      authors: []
    }
  })
  req.account = await database.getAccountById(result.insertedId)

  if (result.insertedId) {
    next()
  } else {
    res.status(500).json({ error: 'internal server error' })
  }

}