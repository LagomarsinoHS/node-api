import mongoose from 'mongoose'


const storageSchema = new mongoose.Schema({
    url: {
        type: String,
    },
    filename: {
        type: String
    }
}, {
    timestamps: true
})

export default mongoose.model('storages', storageSchema)