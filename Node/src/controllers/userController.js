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
    if (!passwordValidate(password)) {
      return res.status(400).json({message:'Password must contain at least one uppercase letter, one lowercase letter, one number and be at least 6 characters long.' })
    }
    if (!emailValidate(email)) {
      return res.status(400).json({ message: 'Invalid email' })
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
    if (!emailValidate(email)) {
      return res.status(400).json({ message: 'Invalid email' })
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

// Email validation function
function emailValidate(email){
  const emailregex = /^[a-z0-9.!#$%&’*+/=^?_`{|}~-]+@[a-z0-9-]+\.[a-z]{2,}$/
  if (!emailregex.test(email)) {
    return false
  }
  return true
}

//Password validation function
function passwordValidate(password){
  const passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[\w\W]{6,20}$/
  if(!passwordregex.test(password)){
    return false
  }
  return true
}

module.exports = { getAllUsers, getUserById, addUser, deleteUser, updateUser }