const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
require('dotenv').config({ path: 'server/.env' });
const corsSetting = {
  origin: 'http://localhost:3000',
};
app.use(cors(corsSetting));
app.use(bodyParser());
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
});

app.post('/friends', (req, res) => {
  if (!req.body.id) return;
  const query = `SELECT users.id, users.name, users.surname from users INNER JOIN friends on friends.userID WHERE (friends.userID = ${req.body.id} || friends.friendID = ${req.body.id} ) && (users.id = friends.friendID || users.id = friends.userID) && users.id != ${req.body.id} `;
  connection.query(query, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.post('/user', (req, res) => {
  if (!req.body.id) return;
  const query = `SELECT id, name, surname FROM users WHERE id = ${req.body.id}`;
  connection.query(query, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.get('/news', (req, res) => {
  const query = 'SELECT * FROM news ';

  connection.connect((e) => {
    if (e) throw new Error('Connection failed');
    console.log('Connected');
  });

  connection.query(query, (err, result) => {
    if (err) throw err;
    res.send(result);
  });

  connection.end();
});

app.listen(6060, 'localhost', () => {
  console.log(`Server is working at http://localhost:6060`);
});
