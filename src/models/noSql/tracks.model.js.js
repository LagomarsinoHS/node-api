import mongoose from 'mongoose'


const tracksSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    album: {
        type: Number
    },
    cover: {
        type: String
    },
    artist: {
        name: String,
        nickname: String,
        nationality: String
    },
    duration: {
        start: Number,
        end: Number
    },
    mediaId: mongoose.SchemaTypes.ObjectId
}, {
    timestamps: true
})

export default mongoose.model('tracks', tracksSchema)