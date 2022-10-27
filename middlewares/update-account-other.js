
module.exports = async function (req, res) {
  if (!req.token.isModerator) {
    res.status(403).json({
      ok: false, error: 'insufficient permissions'
    })
  } else {
    res.status(200).json({ ok: true })
  }
}