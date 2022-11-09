
module.exports = async function (req, res) {
  const ownerId = req.account._id
  const { database } = req.app.locals.settings
  const { name } = req.body

  const bookshelfId = await database.bookshelves.create(ownerId, name)
  const result = await database.accounts.addBookshelf(ownerId, bookshelfId)
  console.log(result)
  res.json({ ok: result })
}