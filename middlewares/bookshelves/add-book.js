
module.exports = async (req, res) => {
  const ownerId = req.account._id
  const { database } = req.app.locals.settings
  const { bookshelfId,book } = req.body

  console.log(bookshelfId)
  console.log(book)

  const result = await database.bookshelves.addBook(bookshelfId,book)

  res.json({ ok: result })
}