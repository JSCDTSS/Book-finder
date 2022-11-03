
module.exports = async function (req, res, next) {
  const { database } = req.app.locals.settings
  const { _id } = req.account
  console.log( _id )
  const accounts = await database.getAccounts({ _id })
  console.log(accounts)

  res.json({ ok: true })

}