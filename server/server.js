const express = require('express');
const cors = require('cors');
const app = express();
const httpServer = require('http').createServer(app);
const mysql = require('mysql');
const bodyParser = require('body-parser');
const { default: axios } = require('axios');
require('dotenv').config({ path: '.env' });

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
    axios.post(`${process.env.REACT_APP_SERVER_URL}/update-user`, {
      id: data.id,
      isOnline: true,
      socket: socket.id,
    });
  });

  socket.on('msg', (data) => {
    const query = `SELECT users.socket, users.isOnline, users.unreadMessages FROM users WHERE id='${data.reciever}'`;
    connection.query(query, (err, result) => {
      if (err) return new Error(err);
      socket.to(result[0].socket).emit('newmsg', data);
      if (!result[0].isOnline) {
        socket.to(result[0].socket).emit('newmsg', data);

        let parsedUnread = JSON.parse(result[0].unreadMessages);
        if (parsedUnread && parsedUnread.length > 0) {
          parsedUnread.push({ from: data.sender, to: data.reciever });
        } else {
          parsedUnread = [{ from: data.sender, to: data.reciever }];
        }
        const query = `UPDATE users SET unreadMessages='${JSON.stringify(
          parsedUnread
        )}' WHERE id='${data.reciever}'`;
        connection.query(query, (err, result) => {
          if (err) return new Error(err);
        });
      }
    });
  });
});

app.get('/all-users', (req, res) => {
  connection.query(
    'SELECT id, name, surname FROM users WHERE 1',
    (err, result) => {
      if (err) throw Error('error');
      res.send(result);
    }
  );
});

app.post('/accept-friend', (req, res) => {
  const query = 'INSERT INTO friends (friendID, userID) VALUES (?,?)';
  connection.query(
    query,
    [req.body.friendID, req.body.userID],
    (err, result) => {
      if (err) throw Error('error');
    }
  );
});
app.post('/decline-friend', (req, res) => {
  const query = 'UPDATE users SET invitations = ? WHERE id = ?';
  connection.query(
    query,
    [req.body.invitations, req.body.userID],
    (err, result) => {
      if (err) throw Error('error');
      console.log(result);
    }
  );
});

app.post('/change-password', (req, res) => {
  if (req.body.id && req.body.currentPassword && req.body.newPassword) {
    const query = 'UPDATE users SET password=? WHERE id = ? AND password = ?';
    connection.query(
      query,
      [req.body.newPassword, req.body.id, req.body.currentPassword],
      (err, result) => {
        if (err) throw Error('Error');
        if (result.changedRows > 0) {
          res.sendStatus(200);
        } else {
          res.sendStatus(201);
        }
      }
    );
  } else {
    res.sendStatus(404);
  }
});

app.post('/change-email', (req, res) => {
  if (req.body.id && req.body.currentEmail && req.body.newEmail) {
    const query = 'UPDATE users SET email=? WHERE id = ? AND email = ?';
    connection.query(
      query,
      [req.body.newEmail, req.body.id, req.body.currentEmail],
      (err, result) => {
        if (err) throw Error('Error');
        if (result.changedRows > 0) {
          res.sendStatus(200);
        } else {
          res.sendStatus(201);
        }
      }
    );
  } else {
    res.sendStatus(404);
  }
});
app.post('/change-name', (req, res) => {
  if (req.body.id && req.body.newFirstName && req.body.newLastName) {
    const query = 'UPDATE users SET name=?, surname=? WHERE id = ?';
    connection.query(
      query,
      [req.body.newFirstName, req.body.newLastName, req.body.id],
      (err, result) => {
        if (err) throw Error('Error');
        if (result.changedRows > 0) {
          res.sendStatus(200);
        } else {
          res.sendStatus(201);
        }
      }
    );
  } else {
    res.sendStatus(404);
  }
});

app.post('/update-unread', (req, res) => {
  const query = `UPDATE users SET unreadMessages='${JSON.stringify(
    req.body.messages
  )}' WHERE id='${req.body.id}'`;
  connection.query(query, (err, result) => {
    if (err) return new Error(err);
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
  const query = `SELECT id, name, surname, profileImageName, unreadMessages, invitations FROM users WHERE email='${req.body.email}' && password='${req.body.password}'`;
  connection.query(query, (err, result) => {
    if (err) return new Error(err);
    if (result.length === 0) return new Error('No user');
    result[0].token = `TOKEN${Math.random() * 100}`;
    res.send(result);
  });
});

app.post('/friends', (req, res) => {
  if (!req.body.id) return;
  const query = `SELECT users.id, users.name, users.surname, users.isOnline, users.socket, users.profileImageName from users INNER JOIN friends on friends.userID WHERE (friends.userID = ${req.body.id} || friends.friendID = ${req.body.id} ) && (users.id = friends.friendID || users.id = friends.userID) && users.id != ${req.body.id} `;
  connection.query(query, (err, result) => {
    if (err) return new Error(err);
    res.send(result);
  });
});

app.post('/user', (req, res) => {
  if (!req.body.id) return;
  const query = `SELECT id, name, surname, profileImageName, unreadMessages, invitations FROM users WHERE id = ${req.body.id}`;
  connection.query(query, (err, result) => {
    if (err) return new Error(err);
    res.send(result);
  });
});

httpServer.listen(6060, 'localhost', () => {
  console.log(`Server is working at http://localhost:6060`);
});
