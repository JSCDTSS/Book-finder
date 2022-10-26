const { saltAndHash } = require("../utils")

module.exports = async function (req, res) {
    const { database } = req.app.locals.settings
    const newAccountInfo = req.body
    const accountId = req.token._id
    if (newAccountInfo.password){
        newAccountInfo.password = await saltAndHash(newAccountInfo.password)
    }

    const result = await database.updateAccount(accountId, newAccountInfo)
    res.json({ ok: result.acknowledged })
}