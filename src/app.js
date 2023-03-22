import express, { json } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { storageRoutes, trackRoutes, userRoutes } from './routes/index.js'

const app = express()

// Middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(json())
app.use(express.static('src/storage'))


app.get('/', (req, res) => {
    res.json({ wi: 'wi' })
})

app.use('/api/users', userRoutes)
app.use('/api/storages', storageRoutes)
app.use('/api/tracks', trackRoutes)

app.get('*', (req, res) => {
    res.status(404).json({
        msg: 'This endpoint doesn\'t exist.'
    })
})
export default app