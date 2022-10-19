
module.exports = async function (req, res) {
  const newAccount = req.body
  const { database } = req.app.locals.settings

  //verify if we should create an account with these inputs
  if (!checkAreFieldsValid(newAccount)) {
    return res.status(200).json({ errors: ['invalid field'] })
  }
  const duplicates = await getDuplicatesOfUniqueFields(newAccount, database)
  if (duplicates.length) {
    return res.status(200).json({ errors: duplicates })
  }

  database.addAccount(newAccount)
    .then(ans => res.json(ans))
    .catch(console.log)
}

async function getDuplicatesOfUniqueFields(newAccount, database) {
  const duplicates = await database.getAccounts({
    $or: [{ userName: newAccount.userName }, { email: newAccount.email }]
  })

  const duplicateTypes = []
  duplicates.forEach(account => {
    if (account.userName === newAccount.userName) {
      duplicateTypes.push('userName is duplicated')
    }
    if (account.email === newAccount.email) {
      duplicateTypes.push('email is duplicated')
    }
  })
  return duplicateTypes
}

function checkAreFieldsValid(newAccount) {
  return (
    newAccount.userName.length > 4 &&
    newAccount.email.length > 4 &&
    newAccount.password.length > 8
  )
}