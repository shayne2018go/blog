const bcrypt = require('bcrypt');

const saltRounds = 10;

module.exports =  {
  encrypt (password) {
    var salt = bcrypt.genSaltSync(saltRounds)
    var hash = bcrypt.hashSync(password, salt)
    return hash
  },
  decode (password, hash) {
    // console.log(password, hash)
    return bcrypt.compareSync(password, hash)
  }
}