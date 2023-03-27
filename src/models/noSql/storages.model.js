import mongoose from 'mongoose'


const storageSchema = new mongoose.Schema({
    url: {
        type: String,
    },
    filename: {
        type: String
    },
    softDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

storageSchema.statics.doSoftDelete = function (_id) {
    return this.findByIdAndUpdate({ _id }, { softDeleted: true }, { new: true })
}

export default mongoose.model('storages', storageSchema)