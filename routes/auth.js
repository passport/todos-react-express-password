var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local');


var router = express.Router();

router.post('/login/password', (req, res) => {
  console.log('TODO: login password');
  console.log(req.body);
});

module.exports = router;
