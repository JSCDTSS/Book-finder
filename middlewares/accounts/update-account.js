
module.exports = async function (req, res) {
  const { database } = req.app.locals.settings
  const newAccountInfo = req.body
  const accountId = req.account._id

  const result = await database.accounts.update(accountId, newAccountInfo)
  res.json({ ok: result })
  
}