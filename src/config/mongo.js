import mongoose from 'mongoose'


const mongoConnection = async () => {
    try {
        const MONGO_URI = process.env.MONGO_URI
        const DB_NAME = process.env.DB_NAME
        await mongoose.connect(`${MONGO_URI}/${DB_NAME}`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
        console.log("**** Database connected! ****");
    } catch (error) {
        console.log('There was an error', error);
    }
}

mongoConnection()