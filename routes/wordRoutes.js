import express from 'express'
import Word from '../models/wordModel.js'

const router = express.Router()

router.get('/', async (req, res) => {
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
router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const word = await Word.findById(id)
        return res.status(200).json(word)
    } catch (error) {
        console.log(error.message)
        res.status(500).send({message: error.message})
    }
})

export default router