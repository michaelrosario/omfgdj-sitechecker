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

router.post('/login', (req, res, next) => {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('===== user!!======')
        console.log('logged in req.user', req.user);
        var userInfo = {
          user_login: req.user.user_login
        };
        res.send(userInfo);
    }
)

router.get('/', (req, res, next) => {
    console.log('===== user!!======')
    console.log("req.user",req.user);
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
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