import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        msg: 'home users'
    })
})

export {router as userRoutes}