import express from 'express'
import { createItem, deleteItem, getItem, getItems, updateItem } from '../controllers/tracks.controller.js'
import { validatorCreateItem, validatorGetItem } from '../validators/tracks.validators.js'
import { authMiddleware } from '../middleware/check_session.js'
import { checkRol } from '../middleware/check_rol.js'
const router = express.Router()

router.get('/', authMiddleware, getItems)
router.get('/:id', validatorGetItem, getItem)
router.post('/', validatorCreateItem, authMiddleware, checkRol(['admin', 'user']), createItem)
router.put('/:id', validatorGetItem, validatorCreateItem, updateItem)
router.delete('/:id', validatorGetItem, deleteItem)

export { router }