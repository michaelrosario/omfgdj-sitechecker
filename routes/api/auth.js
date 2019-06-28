const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const passport = require('../../passport');

router.post('/signup', (req, res) => {
    console.log('user signup');
    console.log(req.body);
    const { 
      user_login, 
      user_password } = req.body
    // ADD VALIDATION
    User.findOne({ user_login: user_login }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the username: ${user_login}`
            })
        }
        else {
            const newUser = new User(req.body)
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})

router.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      if (err) { return next(err); }
      if (!user) { return res.json({ message: "failure" }); }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        console.log("user.user_login",user.user_login);
        return res.json({ message: "success", user: user._id });
      });
    })(req, res, next);
  });

router.get('/', (req, res, next) => {
    console.log('===== user!!======')
    console.log("req.user",req.user);
    if (req.user) {
        res.json({ message: "success", user: req.user })
    } else {
        res.json({ message: "failure", user: null })
    }
})

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

module.exports = router