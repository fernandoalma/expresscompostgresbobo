var express = require('express');
var router = express.Router();

const { Client } = require('node-postgres');

const client = new Client({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'postgres',
  password: 'postgres',
  port: 5432
});

client.connect();

/* GET users listing. */
router.get('/', function(req, res, next) {

  client.query('SELECT * from users').then(
      data => {
          let users = data.rows
          res.render('users', { users: users });
      }
  )
});

module.exports = router;
