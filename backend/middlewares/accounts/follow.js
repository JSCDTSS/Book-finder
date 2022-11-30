
/**
 * Follow feature for future release
 */
module.exports = async (req, res) => {
  const { database } = req.app.locals.settings
  const { followerId } = req.body
  const accountId = req.account._id

  const result = await database.accounts.addFollower(followerId,accountId)

  res.json({ ok: result })
}