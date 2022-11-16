
module.exports = async function (req, res, next) {
  const newAccount = req.body
  const { database } = req.app.locals.settings

  const errors = []

  if (!isEmailValid(newAccount.email)){
    errors.push('invalid email')
  }
  if (!isUsernameValid(newAccount.username)){
    errors.push('invalid username')
  }
  if (!isPasswordValid(newAccount.password)){
    errors.push('invalid password')
  }
  if (await doesUsernameExist(database,newAccount.username)){
    errors.push('username exists')
  }
  if (await doesEmailExist(database,newAccount.username)){
    errors.push('email exists')
  }

  if (errors.length) res.status(400).json({ errors })
  else next()
}

async function doesUsernameExist(database,username){
  const duplicates = await database.accounts.list({ username })
  return Boolean(duplicates.length)
}

async function doesEmailExist(database,email){
  const duplicates = await database.accounts.list({ email })
  return Boolean(duplicates.length)
}

// can add other checks later
function isEmailValid(email) {
  return email.includes('@')
}

function isUsernameValid(username) {
  return username.length > 4 && !username.includes('@')
}

function isPasswordValid(password) {
  return password.length > 8
}