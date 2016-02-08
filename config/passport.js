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
    User.findOne({ email: email }, function(err, user) {
      if (err) {
        return done(err);
      } else if (user) {
        return done(null, false);
      } else {
        var newUser = new User();

        newUser.email = email;
        newUser.passwordHash = newUser.generateHash(password);
        newUser.save(function(err) {
          if (err) {
            throw err;
          } else {
            return done(null, newUser);
          }
        })
      }
    });
  }));

  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  function(req, email, password, done) {
    User.findOne({ email: email }, function(err, user) {
      if (err) {
        return done(err);
      } else if (!user) {
        return done(null, false);
      } else {
        if (user.validatePassword(password)) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      }
    });
  }));

};
