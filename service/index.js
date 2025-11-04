const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const { v4: uuid } = require('uuid');

const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

const users = {};
const authTokens = {};

app.post('/api/auth/register', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ msg: 'Username and password required' });
  }

  if (users[username]) {
    return res.status(409).json({ msg: 'Username already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  
  users[username] = {
    username,
    password: hashedPassword
  };

  const token = uuid();
  authTokens[token] = username;

  res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'strict' });
  
  res.json({ username });
});

app.post('/api/auth/login', async (req, res) => {
  const { username, password } = req.body;

  const user = users[username];
  if (!user) {
    return res.status(401).json({ msg: 'Invalid username or password' });
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(401).json({ msg: 'Invalid username or password' });
  }

  const token = uuid();
  authTokens[token] = username;

  res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'strict' });
  
  res.json({ username });
});

app.delete('/api/auth/logout', (req, res) => {
  const token = req.cookies.token;
  if (token) {
    delete authTokens[token];
  }
  res.clearCookie('token');
  res.status(204).end();
});

app.get('/api/auth/user', (req, res) => {
  const token = req.cookies.token;
  const username = authTokens[token];
  
  if (username) {
    res.json({ username });
  } else {
    res.status(401).json({ msg: 'Not authenticated' });
  }
});

function requireAuth(req, res, next) {
  const token = req.cookies.token;
  const username = authTokens[token];
  
  if (!username) {
    return res.status(401).json({ msg: 'Not authenticated' });
  }
  
  req.username = username;
  next();
}

app.get('/api/scores', requireAuth, (req, res) => {
  const scores = [
    { username: req.username, score: 100 },
    { username: 'player2', score: 95 },
    { username: 'player3', score: 87 }
  ];
  res.json(scores);
});

app.post('/api/scores', requireAuth, (req, res) => {
  const { score } = req.body;
  
  const newScore = {
    username: req.username,
    score,
    timestamp: new Date().toISOString()
  };
  
  res.json(newScore);
});


app.get('/api/test', (req, res) => {
  res.json({ msg: 'Backend is working!' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});