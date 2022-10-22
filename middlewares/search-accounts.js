

module.exports = async function (req, res) {
  const accounts = await database.getAccounts(req.query)
  console.log(accounts)
  res({ok:true})
}