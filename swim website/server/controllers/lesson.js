import Lesson from "../models/lesson.js"



export const getLesson = async (req, res) => {
    try {
        const allLessons = await Lesson.find({})

        res.status(200).json(allLessons)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export const updateLesson = async (req, res) => {
    // const { id } = req.params
    const { id, star } = req.body
    console.log({ id, star });
    try {

        const foundLesson = await Lesson.findById(id);
        console.log({ foundLesson });
        foundLesson.star = star
        await foundLesson.save();
        console.log({ foundLesson });
        res.json(foundLesson);

    } catch (error) {
        console.log(error)
    }
}

export const filterLesson = async (req, res) => {
    const { searchText } = req.body
    const searchQuery = new RegExp(searchText, 'i');

    console.log({ searchQuery });
    const foundLessons = await Lesson.find({
        title: { $regex: searchQuery }
    })
    res.json(foundLessons)

}

export const applyFilers = async (req, res) => {
    try {
        const { price, age, level } = req.query
        let query = {}
        if (price) {
            query.price = { $lt: Number(price) }
        }
        if (age) {
            query.age = age
        }
        if (level) {
            query.level = level
        }

        console.log(query);
        const allLessons = await Lesson.find(query)
        res.json(allLessons)
    } catch (err) {
        console.log(err);
    }
}