import { matchedData } from "express-validator"
import { Track } from "../models/index.js"
import { handleHTTPError } from "../utils/handle.error.js"

const getItems = async (req, res) => {
    try {
        const data = await Track.find()
        res.json(data)
    } catch (error) {
        handleHTTPError(res, `Something happend tracks-getItems-${error}`, 400)
    }
}
const getItem = async (req, res) => {
    try {
        const { id } = matchedData(req)
        const item = await Track.findById(id)

        res.json(item)
    } catch (error) {
        handleHTTPError(res, `Something happend tracks-getItems-${error}`, 400)
    }

}
const createItem = async (req, res) => {
    try {
        const cleanBody = matchedData(req)//Esto es un metodo de express validator que limpia la data de cualquier cosa que venga que NO este definido en el check asociado
        const newTrack = await Track.create(cleanBody)

        res.json(newTrack)
    } catch (error) {
        handleHTTPError(res, `Something happend tracks-createItem-${error}`, 400)
    }

}
const updateItem = async (req, res) => {
    try {
        const { id, ...body } = matchedData(req)//Esto es un metodo de express validator que limpia la data de cualquier cosa que venga que NO este definido en el check asociado como middleware de la ruta
        const track = await Track.findByIdAndUpdate(id, body, { new: true })

        res.json(track)
    } catch (error) {
        handleHTTPError(res, `Something happend tracks-updateItem-${error}`, 400)
    }
}
const deleteItem = async (req, res) => {
    try {
        const { id } = matchedData(req)//Esto es un metodo de express validator que limpia la data de cualquier cosa que venga que NO este definido en el check asociado como middleware de la ruta
        const result = await Track.deleteOne({ _id: id })

        res.json(result)
    } catch (error) {
        console.log("error", error);
        handleHTTPError(res, `Something happend tracks-updateItem-${error}`, 400)
    }
}


export {
    getItem,
    getItems,
    createItem,
    updateItem,
    deleteItem
}