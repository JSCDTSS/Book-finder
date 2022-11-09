
module.exports = async function (req, res, next) {
  const newAccount = req.body
  const { database } = req.app.locals.settings

  const errors = []

  if (!isEmailValid(newAccount.email)){
    errors.push('invalid email')
  }
  if (!isUserNameValid(newAccount.userName)){
    errors.push('invalid username')
  }
  if (!isPasswordValid(newAccount.password)){
    errors.push('invalid password')
  }
  if (await doesUserNameExist(database,newAccount.userName)){
    errors.push('userName exists')
  }
  if (await doesEmailExist(database,newAccount.userName)){
    errors.push('email exists')
  }

  if (errors.length) res.status(400).json({ errors })
  else next()
}

async function doesUserNameExist(database,userName){
  const duplicates = await database.accounts.list({ userName })
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

function isUserNameValid(userName) {
  return userName.length > 4 && !userName.includes('@')
}

function isPasswordValid(password) {
  return password.length > 8
}