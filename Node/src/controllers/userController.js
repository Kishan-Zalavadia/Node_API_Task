const userService = require('../services/userService')

// GET all Userss
const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ error: error.message, stack: error.stack })
  }
}

// GET Users by ID
const getUserById = async (req, res) => {
  try {
    const user = await userService.getUser(req.params.id)
    if (!user) return res.status(404).json({ message: 'User not found' })
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ error: error.message, stack: error.stack })
  }
}

// POST - Add new User
const addUser = async (req, res) => {
  try {
    const { name, email, password } = req.body
    if (!name || !email || !password)
      return res
        .status(400)
        .json({ error: 'Name,email and password are required' })
    const passwordValidate = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[\w\W]{6,10}$/
    if (!passwordValidate.test(password)) {
      return res.status(400).json({
        message:
          'Password must contain at least one uppercase letter, one lowercase letter, one number and be at least 6 characters long.'
      })
    }

    if (emailValidate(email)) {
      return res.status(400).json({ message: 'Invalid email' })
    }
    const newUser = await userService.createUser(name, email, password)
    res.status(201).json(newUser)
  } catch (error) {
    res.status(500).json({ error: error.message, stack: error.stack })
  }
}

// DELETE - Delete User by ID
const deleteUser = async (req, res) => {
  try {
    const User = await userService.deleteUser(req.params.id)
    if (User.rowCount == 0)
      return res.status(404).json({ message: 'User not found' })
    res.status(204).send()
  } catch (error) {
    res
      .status(500)
      .json({ error: { message: 'Error deleting User', error: error } })
  }
}

// PUT - Update User by ID
const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    const { name, email } = req.body
    if (!name || !email)
      return res.status(400).json({ error: 'Name and email are required' })
    if (!emailValidate(email)) {
      return res.status(400).json({ message: 'Invalid email' })
    }
    const updatedUser = await userService.updateUser(id, name, email)
    if (!updatedUser) return res.status(404).json({ message: 'User not found' })
    res.status(204).send()
  } catch (error) {
    res.status(500).json({ error: error.message, stack: error.stack })
  }
}

// Email validation function
const emailValidate = (email) => {
  const emailregex = /^[a-z0-9.!#$%&’*+/=^?_`{|}~-]+@[a-z0-9-]+\.[a-z]{2,}$/
  if (!emailregex.test(email)) {
    return false
  }
  return true
}

module.exports = { getAllUsers, getUserById, addUser, deleteUser, updateUser }
