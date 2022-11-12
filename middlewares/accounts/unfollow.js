
module.exports = async (req, res) => {
  const { database } = req.app.locals.settings
  const { followerId } = req.body
  const accountId = req.account._id

  const result = await database.accounts.removeFollower(followerId,accountId)

  res.json({ ok: result })
}