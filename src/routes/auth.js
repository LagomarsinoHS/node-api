import express from 'express'
import { validatorLogin, validatorRegister } from '../validators/auth.validators.js'
import { loginController, registerController } from '../controllers/auth.controller.js'

const router = express.Router()

router.post('/register', validatorRegister, registerController)
router.post('/login', validatorLogin, loginController)

export { router }