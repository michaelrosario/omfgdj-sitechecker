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
                if (err) {
                    return res.json(err);
                } else {
                    //res.json(savedUser)
                    req.logIn(savedUser, function(err) {
                        if (err) {  return res.json(err); }
                        console.log("user.user_login",savedUser.user_login);
                        return res.json({ message: "success", user: savedUser._id, username: savedUser.user_login });
                      });
                }
                
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
        return res.json({ message: "success", user: user._id, username: user.user_login });
      });
    })(req, res, next);
  });

router.get('/', (req, res, next) => {
    console.log('===== user!!======')
    
    if (req.user) {
        User.findById(req.user._id).then(response => {
            console.log("req.user",req.user);
            console.log("username",response.user_login);
            res.json({ message: "success", user: req.user, username: response.user_login })
        });
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