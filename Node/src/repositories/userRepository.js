const {users} = require('../db/schema/users')
const db = require('../db/index')
const {eq} = require('drizzle-orm')

// Get all users
const allUsers = async () => {
  const user = await db.select().from(users);
  return user; 
}

// Get a user by ID
const getUserById = async (id) => {
  const user = await db.select().from(users).where(eq(users.id,id));
  return user
}

// Add a new user
const addUser = async (name, email, password) => {
  const result = await db.insert(users).values({name:name,email:email,password:password}).returning()
  return result
}

// Delete a user
const deleteUser = async (id) => {
  const result = db.delete(users).where(eq(users.id,id))
  return result
}

// Update a user
const updateUser = async (id, name, email) => {
  const result = await db.update(users).set({name:name,email:email}).where(eq(users.id,id)).returning();
  return result
}

module.exports = { allUsers, getUserById, addUser, deleteUser, updateUser}