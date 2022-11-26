
module.exports = async function (req, res, next) {
  const { database } = req.app.locals.settings
  const newAccountInfo = req.body
  const accountId = req.account._id
  await database.accounts.update(accountId, newAccountInfo)
  next()
}