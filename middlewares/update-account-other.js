

module.exports = async function (req, res) {
  const { database } = req.app.locals.settings

  if (!req.account.isModerator) {
    return res.status(403).json({
      ok: false, error: 'insufficient permissions'
    })
  }

  const account = await database.getAccountByUniqueId(req.body.uniqueId)
  console.log(account._id)
  const {
    firstName, surname, preferences
  } = req.body
  
  const result = await database.updateAccount(account._id,{
    firstName, surname, preferences
  })

  res.json({ ok: true })

}