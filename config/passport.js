var LocalStrategy = require('passport-local').Strategy;

var User = require('../app/models/user');

module.exports = function(passport) {

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  function(req, email, password, done) {
    console.log('email :' + email);
    console.log('password :' + password);
    User.findOne({ email: email }, function(err, user) {
      if (err) {
        return done(err);
      } else if (user) {
        console.log('user: ' + user);
        return done(null, false);
      } else {
        var newUser = new User();

        newUser.email = email;
        newUser.passwordHash = newUser.generateHash(password);
        newUser.save(function(err) {
          if (err) {
            console.log('error: ' + err)
            throw err;
          } else {
            console.log('it worked!');
            return done(null, newUser);
          }
        })
      }
    });
  }));

};
