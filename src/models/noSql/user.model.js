import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: Number
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: "user",
    },
    softDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

userSchema.statics.doSoftDelete = function (_id) {
    return this.findByIdAndUpdate({ _id }, { softDeleted: true }, { new: true })
}

export default mongoose.model('users', userSchema)