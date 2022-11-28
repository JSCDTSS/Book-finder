
module.exports = async function (req, res, next) {
  const { database } = req.app.locals.settings
  const newAccountInfo = req.body
  console.log(newAccountInfo)
  await database.accounts.update(req.account._id, newAccountInfo)
  req.account = (await database.accounts.list({_id: req.account._id}))[0]
  next()
}