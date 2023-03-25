import express from 'express'
import { createItem, deleteItem, getItem, getItems, updateItem } from '../controllers/tracks.controller.js'
import { validatorCreateItem, validatorGetItem } from '../validators/tracks.validators.js'
const router = express.Router()

router.get('/', getItems)
router.get('/:id', validatorGetItem, getItem)
router.post('/', validatorCreateItem, createItem)
router.put('/:id', validatorGetItem, validatorCreateItem, updateItem)
router.delete('/:id', validatorGetItem, deleteItem)

export { router as trackRoutes }