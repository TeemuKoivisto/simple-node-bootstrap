
const bcrypt = require("bcrypt-nodejs")
// const passwordGenerator = require("password-generator");

const PasswordHelper = {

  hashPassword(password) {
    return bcrypt.hashSync(password)
  },

  comparePassword(password, hash) {
    return bcrypt.compareSync(password, hash)
  },

  // generatePassword() {
  //   return passwordGenerator(24, false);
  // }
}

module.exports = PasswordHelper
