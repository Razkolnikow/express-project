let encryption = require('../utilities/encryption');
let User = require('mongoose').model('User');

module.exports = {
  register: (req, res) => {
    res.render('users/register');
  },
  create: (req, res) => {
    let user = req.body;
    console.log(user);

    if (user.password !== user.confirmPassword) {
      user.globalError = 'Passwords do not match!';
      res.render('users/register', user)
    } else {
      user.salt = encryption.generateSalt();
      user.hashedPass = encryption.generateHashedPassword(user.salt, user.password);
      User
        .create(user)
        .then(user => {
          req.logIn(user, (err, user) => {
            if (err) {
              res.render('users/register', {
                globalError: '500'
              })
              return;
            }

            res.redirect('/');
          })
        });
    }
  },
  login: (req, res) => {
    res.render('users/login')
  },
  authenticate: function (req, res) {
    let inputUser = req.body;
    console.log(inputUser);
    User
      .findOne({
        username: inputUser.username
      })
      .then(user => {
        if (!user || !user.authenticate(inputUser.password)) {
          res.render('users/login', {
            globalError: 'Invalid username or password'
          });
          return;
        } else {
          req.logIn(user, (err, user) => {
            if (err) {
              res.render('users/login', {
                globalError: '500'
              })
              return;
            }
          })
        }

        res.redirect('/');
      })
  },
  logout: (req, res) => {
    req.logout();
    res.redirect('/');
  },
  notAuthorized: (req, res) => {
    res.render('/users/notauthorized');
  }
}
