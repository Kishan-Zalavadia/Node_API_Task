const userController = require('../controllers/userController')
const express = require('express')
const {validation} = require('../middleware/validator')
const { postRequestSchema, updateRequestSchema} = require('../validator/zodSchema/userSchema')
const router = express.Router()

router.get('/user/', userController.getAllUsers)
router.get('/user/:id', userController.getUserById)
router.post('/user/', validation(postRequestSchema), userController.addUser)
router.delete('/user/:id',userController.deleteUser)
router.patch('/user/:id', validation(updateRequestSchema), userController.updateUser)

module.exports = router