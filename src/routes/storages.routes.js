import express from 'express'
import { createItem,getItems } from '../controllers/storages.controller.js'
import { uploadMiddleware } from '../utils/handle.storage.js'


console.log(">storage.route>", process.env.TEST);

const router = express.Router()

router.get('/', getItems)
//router.get('/:id', getItem)
router.post('/', uploadMiddleware.single('fileName'), createItem)
//router.put('/', updateItem)
//router.delete('/', deleteItem)

export { router as storageRoutes }