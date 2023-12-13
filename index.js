import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
// import Word from './models/wordModel.js'
import wordRoutes from './routes/wordRoutes.js'

dotenv.config()

const port = process.env.PORT || 5000
connectDB()

const app = express()

app.use(express.json())

app.get('/', (req, res) => res.send('API running'))
app.use('/words', wordRoutes)

app.listen(port, () => console.log(`Server running on port ${port}`))