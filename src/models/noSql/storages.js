import mongoose from 'mongoose'


const storageSchema = new mongoose.Schema({
    url: {
        type: String,
    },
    fileName: {
        type: Number
    }
}, {
    timestamps: true
})

export default mongoose.model('storages', storageSchema)