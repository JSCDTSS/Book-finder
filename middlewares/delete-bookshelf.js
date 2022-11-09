
module.exports = async function deleteBookshelf(req, res) {
  const ownerId = req.account._id
  const { database } = req.app.locals.settings
  const { bookshelfId } = req.body
  console.log(ownerId)
  console.log(bookshelfId)

  await database.bookshelves.remove(bookshelfId)
  const result = await database.accounts.removeBookshelf(ownerId, bookshelfId)
  res.json({ ok: true })
}