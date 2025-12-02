const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const { v4: uuid } = require('uuid');
const DB = require('./database.js');

const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());
app.use(express.static('public'));

const ADMIN_USERS = ['eplazz'];

app.post('/api/auth/register', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ msg: 'Username and password required' });
  }

  const existingUser = await DB.getUser(username);
  if (existingUser) {
    return res.status(409).json({ msg: 'Username already exists' });
  }

  const user = await DB.createUser(username, password);

  res.cookie('token', user.token, { httpOnly: true, secure: true, sameSite: 'strict' });
  res.json({ username: user.username });
});

app.post('/api/auth/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await DB.getUser(username);
  if (!user) {
    return res.status(401).json({ msg: 'Invalid username or password' });
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(401).json({ msg: 'Invalid username or password' });
  }

  user.token = uuid();
  await DB.updateUser(user);

  res.cookie('token', user.token, { httpOnly: true, secure: true, sameSite: 'strict' });
  res.json({ username: user.username });
});

app.delete('/api/auth/logout', async (req, res) => {
  const token = req.cookies.token;
  const user = await DB.getUserByToken(token);
  
  if (user) {
    delete user.token;
    await DB.updateUser(user);
  }
  
  res.clearCookie('token');
  res.status(204).end();
});

app.get('/api/auth/user', async (req, res) => {
  const token = req.cookies.token;
  const user = await DB.getUserByToken(token);
  
  if (user) {
    res.json({ 
      username: user.username,
      isAdmin: ADMIN_USERS.includes(user.username)
    });
  } else {
    res.status(401).json({ msg: 'Not authenticated' });
  }
});

async function requireAuth(req, res, next) {
  const token = req.cookies.token;
  const user = await DB.getUserByToken(token);
  
  if (!user) {
    return res.status(401).json({ msg: 'Not authenticated' });
  }
  
  req.username = user.username;
  next();
}

app.get('/api/posts', async (req, res) => {
  const posts = await DB.getAllPosts();
  res.json(posts);
});

app.post('/api/posts', requireAuth, async (req, res) => {
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
  
  await DB.addPost(newPost);
  res.json(newPost);
});

app.delete('/api/posts/:id', requireAuth, async (req, res) => {
  const postId = req.params.id;
  const posts = await DB.getAllPosts();
  const post = posts.find(p => p.id === postId);
  
  if (!post) {
    return res.status(404).json({ msg: 'Post not found' });
  }
  
  const isAdmin = ADMIN_USERS.includes(req.username);
  const isOwner = post.username === req.username;
  
  if (!isOwner && !isAdmin) {
    return res.status(403).json({ msg: 'Not authorized to delete this post' });
  }
  
  await DB.deletePost(postId);
  res.status(204).end();
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 9090 });

const clients = new Set();

wss.on('connection', (ws) => {
  console.log('New WebSocket client connected');
  clients.add(ws);

  ws.on('close', () => {
    clients.delete(ws);
  });
});

function broadcastUserActivity(type, username) {
  const message = JSON.stringify({
    type: type,
    username: username,
    timestamp: new Date().toISOString()
  });

  clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
}

module.exports = { broadcastUserActivity };