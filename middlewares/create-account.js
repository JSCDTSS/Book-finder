
module.exports = async function (req, res) {
  const newAccount = req.body
  const { database } = req.app.locals.settings

  //verify if we should create an account with these details
  const duplicates = await getDuplicatesOfUniqueFields(newAccount, database)
  if (duplicates.length) {
    return res.status(200).json(duplicates)
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




/*
  request to create account comes in
  { userName, firstName, surname, email, password }
  verify that new account is valid
    does that userName / email exist
  response with new account id
*/
