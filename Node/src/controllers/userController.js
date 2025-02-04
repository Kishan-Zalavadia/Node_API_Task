const userService = require('../services/userService')

// GET all Userss
const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers()
    if(users.length == 0){
      return res.status(404).json({message:'No data available at this time'})
    }
    return res.status(200).json(users)
  } catch(error) {
    return res.status(500).json({ error: error.message, stack: error.stack })
  }
}

// GET Users by ID
const getUserById = async (req, res) => {
  try {
    const user = await userService.getUser(req.params.id)
    if (!user){
      return res.status(404).json({ message: 'User not found' })
    } 
    return res.status(200).json(user)
  } catch(error) {
    return res.status(500).json({ error: error.message, stack: error.stack })
  }
}

// POST - Add new User
const addUser = async (req, res) => {
  try {
    const { name, email, password } = req.body
    if (!name || !email || !password){
      return res.status(400).json({ error: 'Name,email and password are required' })
    } 
    const newUser = await userService.createUser(name, email, password)
    return res.status(201).json(newUser)
  } catch(error) {
    return res.status(500).json({ error: error.message, stack: error.stack })
  }
}

// DELETE User by ID
const deleteUser = async (req, res) => {
  try {
    const User = await userService.deleteUser(req.params.id)
    if (User.rowCount == 0){
      return res.status(404).json({ message: 'User not found' })
    }   
    return res.status(204).send()
  } catch(error) {
    return res.status(500).json({ error: { message: 'Error deleting User', error: error } })
  }
}

// PATCH - Update User by ID
const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    const { name, email } = req.body
    if (!name || !email){
      return res.status(400).json({ error: 'Name and email are required' })
    }  
    const updatedUser = await userService.updateUser(id, name, email)
    if(updatedUser.length == 0) {
      return res.status(404).json({ message: 'User not found' })
    }
    return res.status(204).send()
  } catch(error) {
    return res.status(500).json({ error: error.message, stack: error.stack })
  }
}

module.exports = { getAllUsers, getUserById, addUser, deleteUser, updateUser }