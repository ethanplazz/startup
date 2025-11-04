const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

// Port configuration
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

// API routes will go here
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});