
module.exports = async function (req, res, next) {
  const { database } = req.app.locals.settings

  const accountId = await database.accounts.create({
    ...req.body,
    email: req.body.email.toLowerCase(),
    permissions: ['member', 'basic'],
    bookshelves: [],
    preferences: {
      pagesLowerBound: 0,
      pagesUpperBound: 0,
      types: [],
      genres: [],
      authors: []
    },
    followers: [],
    followedBy: []
  })
  if (accountId) {
    const data = await database.accounts.list({ _id: accountId })
    req.account = data[0]
    next()
  } else {
    res.status(500).json({ error: 'internal server error' })
  }

}