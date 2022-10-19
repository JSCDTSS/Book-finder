
module.exports = function (req, res) {
  const { database } = req.app.locals.settings
  database.getAccounts()
    .then(accounts => {
      console.log(accounts)
      res.json(accounts)
    })
}
