import { matchedData } from "express-validator"
import { Storage } from "../models/index.js"
import { handleHTTPError } from "../utils/handle.error.js"
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { unlinkSync } from 'fs'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)

const PORT = process.env.PORT
const PUBLIC_URL = process.env.PUBLIC_URL
const MEDIA_PATH = `${__dirname}/../storage`

const getItems = async (req, res) => {
    try {
        const data = await Storage.find()

        res.json(data)
    } catch (error) {
        handleHTTPError(res, `Something happend storages-getItems-${error}`, 400)
    }
}

const getItem = async (req, res) => {
    try {
        const { id } = matchedData(req)
        const data = await Storage.findById(id)

        res.json(data)
    } catch (error) {
        handleHTTPError(res, `Something happend storages-getItem-${error}`, 400)
    }
}

const createItem = async (req, res) => {
    try {
        const { filename } = req.file

        const newStorage = await Storage.create({
            url: `${PUBLIC_URL}:${PORT}/${filename}`,
            filename
        })

        res.json(newStorage)
    } catch (error) {
        handleHTTPError(res, `Something happend storages-getItem-${error}`, 400)
    }
}

const updateItem = async (req, res) => {
    try {
        const { id, ...body } = matchedData(req)
        const data = await Storage.findByIdAndUpdate(id, body, { new: true })
        res.json(data)
    } catch (error) {
        handleHTTPError(res, `Something happend storages-updateItem-${error}`, 400)
    }
}

const deleteItem = async (req, res) => {
    try {
        const { id } = matchedData(req)
        const data = await Storage.doSoftDelete(id)        
        unlinkSync(`${MEDIA_PATH}/${data.filename}`)

        res.json(data)
    } catch (error) {
        handleHTTPError(res, `Something happend storages-deleteItem-${error}`, 400)
    }
}

export {
    createItem,
    getItems,
    getItem,
    updateItem,
    deleteItem
}