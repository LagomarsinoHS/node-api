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
    mediaId: mongoose.SchemaTypes.ObjectId,
    softDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

tracksSchema.statics.doSoftDelete = function (_id) {
    return this.findByIdAndUpdate({ _id }, { softDeleted: true }, { new: true })
}
export default mongoose.model('tracks', tracksSchema)