
/**
 * Bookshelves for future release
 */

module.exports = async (req, res) => {
  const ownerId = req.account._id
  const { database } = req.app.locals.settings
  const { bookshelfId,book } = req.body


  const result = await database.bookshelves.addBook(bookshelfId,book)

  res.json({ ok: result })
}