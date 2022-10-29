const bcrypt = require('bcrypt')

exports.saltAndHash = async function (password) {
  const salt = await bcrypt.genSalt(10)
  return bcrypt.hash(password, salt)
}

exports.isStringAnEmail = function(str) {
  return str.includes('@')
}
