import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import compression from 'compression'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import connectDB from './config/db.js'
import wordRoutes from './routes/wordRoutes.js'

dotenv.config()

const port = process.env.PORT || 5000
connectDB()

const app = express()

app.set('trust proxy', 1)

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 20,
})
app.use(limiter)

app.use(helmet())

app.use(express.json())
app.use(
    cors({
        origin: 'https://mandarin-english.netlify.app/words',
        methods: ['GET'],
        allowedHeaders: ['Content-Type'],
    })
)

app.use(compression())

app.use('/words', wordRoutes)
app.get('/ip', (req, res) => res.send(req.ip))

app.listen(port, () => console.log(`Server running on port ${port}`))