

module.exports = async function (req, res) {
  const { database } = req.app.locals.settings
  const accounts = await database.accounts.list(req.query, { password: 0 })
  res.json({ ok: true, accounts })
}