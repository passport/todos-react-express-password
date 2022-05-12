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

router.post('/', passport.authenticate('session'), (req, res, next) => {
  db.run('INSERT INTO todos (owner_id, title, completed) VALUES (?, ?, ?)', [
    req.user.id,
    req.body.title,
    req.body.completed == true ? 1 : null
  ], function(err) {
    if (err) { return next(err); }
    
    var todo = {
      id: this.lastID,
      title: req.body.title,
      completed: req.body.completed == true ? true : false,
      url: '/todos/' + this.lastID
    };
    return res.json(todo);
  });
});

module.exports = router;
