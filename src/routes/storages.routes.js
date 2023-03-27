import express from 'express'
import { createItem, getItems, getItem, updateItem, deleteItem } from '../controllers/storages.controller.js'
import { uploadMiddleware } from '../utils/handle.storage.js'
import { validatorGetItem } from '../validators/storages.validators.js'


const router = express.Router()

router.get('/', getItems)
router.get('/:id', validatorGetItem, getItem)
router.post('/', uploadMiddleware.single('fileName'), createItem)
router.put('/:id', updateItem)
router.delete('/:id', validatorGetItem, deleteItem)


export { router }