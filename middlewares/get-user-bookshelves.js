
module.exports = async function (req, res, next) {
  const { database } = req.app.locals.settings
  const { _id } = req.account

  const account = await database.getAccounts({ _id })
  console.log(account)

  res.json({ ok: true })

}