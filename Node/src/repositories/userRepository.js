const executeQuery = require('../config/db')
const users = require('../db/schema/users')
const db = require('../db/index')

// Get all users
const allUsers = async () => {
  const user = await db.select().from(users)
  return user
}

// Get a user by ID
const getUserById = async (id) => {
  const query = 'SELECT * FROM users WHERE id = $1'
  const user = await executeQuery(query, [id])
  return user.rows[0]
}

// Add a new user
const addUser = async (name, email, password) => {
  console.log(name)
  const query =
    'INSERT INTO users(name,email,password) VALUES ($1, $2,$3) RETURNING *'
  const values = [name, email, password]
  const result = await executeQuery(query, values)
  return result.rows[0]
}

// Delete a user
const deleteUser = async (id) => {
  // try {
  const query = 'DELETE FROM users WHERE id = $1'
  const result = await executeQuery(query, [id])
  return result
  // } catch (error) {
  //     throw error;
  // }
}

// Update a user
const updateUser = async (id, name, email) => {
  const query =
    'UPDATE users SET name = $1, email = $2  WHERE id = $3 RETURNING *'
  const values = [name, email, id]
  const result = await executeQuery(query, values)
  return result.rows[0]
}

module.exports = { allUsers, getUserById, addUser, deleteUser, updateUser }
