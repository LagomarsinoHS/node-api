import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { storageRoutes, trackRoutes, userRoutes } from './routes/index.js'

dotenv.config({})
const app = express()

// Middlewares
app.use(morgan('dev'))
app.use(cors())


app.get('/', (req, res) => {
    res.json({ wi: 'wi' })
})

app.use('/api/users', userRoutes)
app.use('/api/storages', storageRoutes)
app.use('/api/tracks', trackRoutes)


app.get('*', (req, res) => {
    res.json({
        msg: 'This endpoint doesn\'t exist.'
    })
})
export default app