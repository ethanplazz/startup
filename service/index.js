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
const posts = [];

const ADMIN_USERS = ['eplazz'];

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
    res.json({ 
      username,
      isAdmin: ADMIN_USERS.includes(username)
    });
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

app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.post('/api/posts', requireAuth, (req, res) => {
  const { imageUrl, caption } = req.body;
  
  if (!imageUrl || !caption) {
    return res.status(400).json({ msg: 'Image URL and caption required' });
  }
  
  const newPost = {
    id: uuid(),
    username: req.username,
    imageUrl,
    caption,
    timestamp: new Date().toISOString()
  };
  
  posts.unshift(newPost);
  res.json(newPost);
});

app.delete('/api/posts/:id', requireAuth, (req, res) => {
  const postId = req.params.id;
  const postIndex = posts.findIndex(p => p.id === postId);
  
  if (postIndex === -1) {
    return res.status(404).json({ msg: 'Post not found' });
  }
  
  const isAdmin = ADMIN_USERS.includes(req.username);
  const isOwner = posts[postIndex].username === req.username;
  
  if (!isOwner && !isAdmin) {
    return res.status(403).json({ msg: 'Not authorized to delete this post' });
  }
  
  posts.splice(postIndex, 1);
  res.status(204).end();
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});