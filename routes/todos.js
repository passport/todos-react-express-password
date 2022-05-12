var express = require('express');
var passport = require('passport');
var db = require('../db');

function fetchTodos(req, res, next) {
  
}

var router = express.Router();

router.get('/', passport.authenticate('session'), (req, res, next) => {
  db.all('SELECT * FROM todos WHERE owner_id = ?', [
    req.user.id
  ], function(err, rows) {
    if (err) { return next(err); }
    
    var todos = rows.map(function(row) {
      return {
        id: row.id,
        title: row.title,
        completed: row.completed == 1 ? true : false,
        url: '/todos/' + row.id
      }
    });
    return res.json(todos);
  });
});

module.exports = router;
