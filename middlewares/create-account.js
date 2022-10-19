
module.exports = function (req, res) {
  const { database } = req.app.locals.settings
  database.getAllAccounts()
    .then(res => {
      console.log(res)
    })
}
