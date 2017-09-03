const mongoose = require('mongoose');
const encryption = require('../utilities/encryption');

let requiredValidationMessage = '{PATH} is required';

let userSchema = mongoose.Schema({
  username: { type: String, required: requiredValidationMessage, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  salt: String,
  hashedPass: String,
  roles: [String]
});

userSchema.method({
  authenticate: function (pass) {
    return encryption.generateHashedPassword(this.salt, pass) === this.hashedPass;
  }
})

let User = mongoose.model('User', userSchema);

module.exports.seedAminUser = () => {
  User.find({}).then(users => {
    if(user.length === 0) {
      let salt = encryption.generateSalt();
      let hashedPass = encryption.generateHashedPassword(salt, 'Admin123');

      User.create({
        username: 'Admin',
        firstName: 'Admin',
        lastName: 'Admin',
        salt: salt,
        hashedPass: hashedPass,
        roles: ['Admin']
      });
    }
  })
}
