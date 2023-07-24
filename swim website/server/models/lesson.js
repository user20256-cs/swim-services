import mongoose from "mongoose";

const lessonSchema = mongoose.Schema({
    title: {
        type: String,
    },
    shortDesc: {
        type: String,
    },
    Desc: {
        type: String,
    },
    star: {
        type: Number,
    },
    price: {
        type: Number,
    },
    level: {
        type: String,
    },
    age: {
        type: String,
    },
})


const Lesson = mongoose.model('lesson', lessonSchema)


export default Lesson