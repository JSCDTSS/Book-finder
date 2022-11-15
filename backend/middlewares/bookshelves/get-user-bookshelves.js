
module.exports = async function (req, res, next) {
  const { database } = req.app.locals.settings
  const { _id } = req.account
  console.log(_id)
  const accounts = await database.accounts.list({ _id })
  const bookshelfIds = accounts[0].bookshelves
  console.log(bookshelfIds)
  const bookshelves = (await Promise.all(
    bookshelfIds.map(_id =>
      database.bookshelves.list({ _id })
    )
  ))[0]
  console.log(bookshelves)

  res.json({ ok: true, bookshelves })

}