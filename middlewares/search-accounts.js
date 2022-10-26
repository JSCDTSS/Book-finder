

module.exports = async function (req, res) {
  const { database } = req.app.locals.settings
  const accounts = await database.getAccounts(req.query)
  res.json({ ok: true, accounts })
}