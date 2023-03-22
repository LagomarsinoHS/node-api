import { Storage } from "../models/index.js"




const getItems = async (req, res) => {

}

const createItem = async (req, res) => {
    /* const { fileName } = req.file

    const newStorage = await Storage.create({
        url: `${PUBLIC_URL}:${PORT}/${fileName}`,
        fileName
    })
    res.json(newStorage) */
}


export {
    createItem,
    getItems
}