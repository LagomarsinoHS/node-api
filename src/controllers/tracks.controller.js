import { Track } from "../models/index.js"

const getItems = async (req, res) => {
    const data = await Track.find()
    res.json(data)
}
const getItem = (req, res) => {
    console.log(req.body, req.params);
    console.log(req);
}
const createItem = async (req, res) => {
    const newTrack = await Track.create(req.body)
    res.json(newTrack)
}
const updateItem = (req, res) => { }
const deleteItem = (req, res) => { }


export {
    getItem,
    getItems,
    createItem,
    updateItem,
    deleteItem
}