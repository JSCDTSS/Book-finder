

module.exports = async function (req, res) {
  const { database } = req.app.locals.settings

  if (!req.token.isModerator) {
    return res.status(403).json({
      ok: false, error: 'insufficient permissions'
    })
  }

  const account = await database.getAccountByUniqueId(req.body.uniqueId)
  console.log(account._id)
  const {
    firstName, surname, preferences
  } = req.body
  
  console.log()
  const result = await database.updateAccount(account._id,{
    firstName, surname, preferences
  })
  console.log(result)


  res.json({ ok: true })

}