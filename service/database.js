const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');
const postCollection = db.collection('post');

(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log('Connected to database');
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

function getUser(username) {
  return userCollection.findOne({ username: username });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(username, password) {
  const passwordHash = await bcrypt.hash(password, 10);
  const user = {
    username: username,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);
  return user;
}

async function updateUser(user) {
  await userCollection.updateOne({ username: user.username }, { $set: user });
}

function getAllPosts() {
  const cursor = postCollection.find();
  return cursor.toArray();
}

async function addPost(post) {
  await postCollection.insertOne(post);
  return post;
}

async function deletePost(postId) {
  await postCollection.deleteOne({ id: postId });
}

module.exports = {
  getUser,
  getUserByToken,
  createUser,
  updateUser,
  getAllPosts,
  addPost,
  deletePost,
};