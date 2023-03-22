import { Storage } from "../models/index.js"

const PORT = process.env.PORT
const PUBLIC_URL = process.env.PUBLIC_URL

const getItems = async (req, res) => {
    res.json({
        msg: 'getItems storage'
    })
}

const createItem = async (req, res) => {
    const { filename } = req.file

    const newStorage = await Storage.create({
        url: `${PUBLIC_URL}:${PORT}/${filename}`,
        filename
    })
    res.json(newStorage)
}


export {
    createItem,
    getItems
}