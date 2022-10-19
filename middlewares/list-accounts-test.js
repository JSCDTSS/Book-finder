
module.exports = function (req, res) {
  const { database } = req.app.locals.settings
  const filter = req.query
  if (filter._id) {
    database.getAccountById(filter._id)
      .then(accounts => {
        console.log(accounts)
        res.json(accounts)
      })
  } else {
    database.getAccounts(filter)
      .then(accounts => {
        console.log(accounts)
        res.json(accounts)
      })
  }

}
