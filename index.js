import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import Word from './models/wordModel.js'

dotenv.config()

const port = process.env.PORT || 5000
connectDB()

const app = express()

app.use(express.json())

app.get('/', (req, res) => res.send('API running'))
app.get('/words', async (req, res) => {
    try {
        const words = await Word.find({})
        return res.status(200).json({
            count: words.length,
            data: words
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).send({message: error.message})
    }
})

app.listen(port, () => console.log(`Server running on port ${port}`))