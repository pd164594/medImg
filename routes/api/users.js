const express = require('express');
const router  = express.Router();
// const sequelize = require('../../database/sequelize');
const User = require('../../models').user;
const Transaction = require('../../models').transaction;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

// Load input validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput    = require('../../validation/login');

// @route:   GET api/users/register
// @desc:    Register a user
// @acccess: Public
router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ where: { email: req.body.email } })
  .then( user => {
    if (user) {
      return res.status(400).json({email: 'Email already exists'});
    } else {
      
      const newUser = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password
      };
      
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if(err) throw err;
          newUser.password = hash;

  
          return User.create(newUser)
          .then(user => res.json(user))
          .catch(err => console.log('Failed to create user', err));
        })
      })
    }
  })
});

// @route:   GET api/users/login
// @desc:    Login user / returning a JWT 
// @acccess: Public
router.post('/login', (req, res) => {

  const { errors, isValid } = validateLoginInput(req.body);

  // check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // find user by email
  User.findOne({
    where: {
     email: email
    }
  }).then(user => {
      // check for user
      if (!user) {
        errors.email = 'Incorrect user name or password.'
        return res.status(404).json(errors);
      }

    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched
        const payload = { id: user.id, name: user.first_name }; // Create JWT Payload

        // Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 7200 },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token
            });
          }
        );
      } else {
        errors.password = 'Incorrect user name or password.'
        return res.status(400).json(errors);
      }
    });
  });
});


// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

// @route   GET api/users/dashboard
// @desc    get user's dashboard
// @access  Private
router.get('/dashboard', passport.authenticate('jwt', {session: false }), (req, res) => {
  const errors = {};
  Transaction.findAll({
    where: {
      userId: req.user.id
    }
  }).then(transactions => {
      if (!transactions) {
        errors.notransactions = 'There are no transactions yet.';
        return res.status(404).json(errors);
      }
      res.json(transactions) 
    })
    .catch(err => res.status(404).json(err));
});

module.exports = router;