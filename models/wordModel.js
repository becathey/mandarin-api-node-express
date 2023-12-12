import mongoose from "mongoose";

const wordSchema = mongoose.Schema(
    {
        mandarin: {
            type: String,
            required: true,
            trim: true,
        },
        pinyin: {
            type: String,
            required: true,
            trim: true,
        },
        english: {
            type: String,
            required: true,
            trim: true,
        },
        wordId: {
            type: Number,
        },
    },
    {
        timestamps: true,
    }
)

const Word = mongoose.model('Word', wordSchema)
export default Word