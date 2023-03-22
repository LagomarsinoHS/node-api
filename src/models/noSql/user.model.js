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
        type: String
    },
    role: {
        type: String
    }
}, {
    timestamps: true
})

export default mongoose.model('users', userSchema)