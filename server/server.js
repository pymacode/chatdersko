const express = require('express');
const cors = require('cors');
const app = express();
const httpServer = require('http').createServer(app);
const mysql = require('mysql');
const bodyParser = require('body-parser');
const { default: axios } = require('axios');
require('dotenv').config({ path: '.env' });

const activeUsers = [];

const io = require('socket.io')(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});
const corsSetting = {
  origin: 'http://localhost:3000',
};
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
});

app.use(cors(corsSetting));
app.use(bodyParser());

io.on('connection', (socket) => {
  socket.emit('message', 'hello');

  socket.on('user-refresh', (data) => {
    axios.post('http://localhost:6060/update-user', {
      id: data.id,
      isOnline: true,
      socket: socket.id,
    });
  });

  socket.on('msg', (data) => {
    console.log(data);
    const query = `SELECT users.socket FROM users WHERE id='${data.reciever}'`;
    connection.query(query, (err, result) => {
      if (err) return new Error(err);
      console.log(result[0].socket);
      socket.to(result[0].socket).emit('newmsg', data);
    });
    // console.log(data);
    // socket.emit('newmsg', data);
  });
});

app.post('/save-messages', (req, res) => {
  if (!req.body) return;
  const query = `UPDATE messages SET messages='${req.body.messages}' WHERE (userID=${req.body.userID} && friendID=${req.body.friendID}) || (userID=${req.body.friendID} && friendID=${req.body.userID})`;
  connection.query(query, (err, result) => {
    if (err) return new Error(err);
    if (result.affectedRows === 0) {
      const queryIns = `INSERT INTO messages (userID, friendID, messages) VALUES (${req.body.userID}, ${req.body.friendID}, '${req.body.messages}')`;
      connection.query(queryIns, (err, result) => {
        if (err) return new Error(err);
        console.log(result);
      });
    }
    res.send('success');
  });
});

app.post('/update-user', (req, res) => {
  if (!req.body) return;
  const query = `UPDATE users SET isOnline=${req.body.isOnline}, socket='${req.body.socket}' WHERE id=${req.body.id}`;
  connection.query(query, (err, result) => {
    if (err) return new Error(err);
    res.send('good');
  });
});

app.post('/messages', (req, res) => {
  if (!req.body.userID) return;
  const query = `SELECT * FROM messages WHERE (userID='${req.body.userID}' || userID='${req.body.friendID}') && (friendID='${req.body.friendID}' || friendID='${req.body.userID}')`;
  connection.query(query, (err, result) => {
    if (err) throw new Error(err);
    res.send(result);
  });
});

app.post('/login', (req, res) => {
  if (!req.body.email && !req.body.password) return;
  const query = `SELECT id, name, surname FROM users WHERE email='${req.body.email}' && password='${req.body.password}'`;
  connection.query(query, (err, result) => {
    if (err) return new Error(err);
    if (result.length === 0) return new Error('No user');
    result[0].token = `TOKEN${Math.random() * 100}`;
    res.send(result);
  });
});

app.post('/friends', (req, res) => {
  if (!req.body.id) return;
  const query = `SELECT users.id, users.name, users.surname, users.isOnline, users.socket from users INNER JOIN friends on friends.userID WHERE (friends.userID = ${req.body.id} || friends.friendID = ${req.body.id} ) && (users.id = friends.friendID || users.id = friends.userID) && users.id != ${req.body.id} `;
  connection.query(query, (err, result) => {
    if (err) return new Error(err);
    res.send(result);
  });
});

app.post('/user', (req, res) => {
  if (!req.body.id) return;
  const query = `SELECT id, name, surname FROM users WHERE id = ${req.body.id}`;
  connection.query(query, (err, result) => {
    if (err) return new Error(err);
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
    if (err) return new Error(err);
    res.send(result);
  });

  connection.end();
});

httpServer.listen(6060, 'localhost', () => {
  console.log(`Server is working at http://localhost:6060`);
});
