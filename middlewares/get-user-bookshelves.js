
module.exports = async function (req, res, next) {
  const { database } = req.app.locals.settings
  const bookshelfIds = req.account.bookshelves
  console.log(req.account)
  
  const bookshelves = await database.getBookshelves(bookshelfIds)
  console.log(bookshelves)
  res.json({ ok: true })

}