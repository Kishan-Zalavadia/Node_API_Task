const express = require('express')
const userController = require('../controllers/userController')

const router = express.Router()

router.get('/user/', userController.getAllUsers)
router.get('/user/:id', userController.getUserById)
router.post('/user/', userController.addUser)
router.delete('/user/:id', userController.deleteUser)
router.patch('/user/:id', userController.updateUser)

module.exports = router
