
module.exports = async function (req, res, next) {
  const ownerId = req.account._id
  const { database } = req.app.locals.settings
  const { name } = req.body

  const result = await database.createBookshelf(ownerId,name)
  console.log(result)
  res.json({ ok: true })
}