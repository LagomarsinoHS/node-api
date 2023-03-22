import express from 'express'
import { createItem, deleteItem, getItem, getItems, updateItem } from '../controllers/tracks.controller.js'
const router = express.Router()

router.get('/', getItems)
router.get('/:id', getItem)
router.post('/', createItem)
router.put('/', updateItem)
router.delete('/', deleteItem)

export { router as trackRoutes }