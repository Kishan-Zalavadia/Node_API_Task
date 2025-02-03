const userRepo = require('../repositories/userRepository')
const bcrypt = require('bcrypt')

// Get all users
const getAllUsers = async () => {
  return await userRepo.allUsers()
}

// Add a new user
const createUser = async (name, email, password) => {
  const salt = await bcrypt.genSalt()
  const hashedPassword = await bcrypt.hash(password, salt)
  return await userRepo.addUser(name, email, hashedPassword)
}

// Get user by ID
const getUser = async (id) => {
  return await userRepo.getUserById(id)
}

// Delete user by ID
const deleteUser = async (id) => {
  return await userRepo.deleteUser(id)
}

// Update user by ID
const updateUser = async (id, name, email) => {
  return await userRepo.updateUser( id, name, email)
}

module.exports = { getAllUsers, getUser, createUser, deleteUser, updateUser}
