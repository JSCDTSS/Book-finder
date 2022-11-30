
/**
 * Bookshelves for future release
 */

module.exports = async function deleteBookshelf(req, res) {
  const ownerId = req.account._id
  const { database } = req.app.locals.settings
  const { bookshelfId } = req.body

  await database.bookshelves.remove(bookshelfId)
  const result = await database.accounts.removeBookshelf(ownerId, bookshelfId)
  res.json({ ok: result })
}