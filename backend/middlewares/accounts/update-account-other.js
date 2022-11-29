

module.exports = async function (req, res) {
  const { database } = req.app.locals.settings
  
  if (!req.account.permissions.includes('moderator')) {
    return res.status(403).json({
      ok: false, error: 'insufficient permissions'
    })
  }

  const account = await database.accounts.getByUniqueId(req.body.uniqueId)
  const result = await database.accounts.update(account._id,req.body.fields)

  res.json({ ok: result })

}
