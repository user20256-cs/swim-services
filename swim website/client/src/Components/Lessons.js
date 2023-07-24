import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import LessonCard from './LessonCard';


const Lessons = () => {
    const [lesson, setLesson] = useState([])
    const [search, setSearch] = useState()

    useEffect(() => {
        fetchLessons()
    }, [])

    const fetchLessons = async () => {
        const { data } = await axios.post("http://localhost:9000/getLesson")
        console.log({ data })
        if (data) {
            setLesson(data)
        }
    }

    const handleStar = async (lessonId, star) => {
        const { data } = await axios.put("http://localhost:9000/updateLesson", { id: lessonId, star })
        console.log({ data })
        if (data) {
            const prevLesson = [...lesson]
            let updatedLesson = prevLesson.map(singleLesson => {
                if (singleLesson._id == lessonId) {
                    return data
                }
                return singleLesson
            })
            setLesson(updatedLesson)
        }
    }

    const handleSearch = async () => {
        const { data } = await axios.post("http://localhost:9000/searchLesson", { searchText: search })
        console.log({ data })
        if (data) {
            setLesson(data)
        }
    }

    const displayRadioValuePrice = () => {
        var ele = document.getElementsByName('price');

        for (let i = 0; i < ele.length; i++) {
            if (ele[i].checked)
                return ele[i].value;
        }
    }

    const displayRadioValueLevel = () => {
        var ele = document.getElementsByName('level');

        for (let i = 0; i < ele.length; i++) {
            if (ele[i].checked)
                return ele[i].value;
        }
    }

    const displayRadioValueAge = () => {
        var ele = document.getElementsByName('age');

        for (let i = 0; i < ele.length; i++) {
            if (ele[i].checked)
                return ele[i].value;
        }
    }

    const handleFilter = async () => {
        let price = displayRadioValuePrice()
        let age = displayRadioValueAge()
        let level = displayRadioValueLevel()
        price = price ?? null
        age = age ?? null
        level = level ?? null
        console.log({ price, age, level });


        const { data } = await axios.get(`http://localhost:9000/applyFilers?price=${price}&age=${age}&level=${level}`)
        if (data) {
            setLesson(data)
        }
    }

    return (
        <div>
            <Navbar />
            <div className="search-box">
                <i className="uil uil-search"></i>
                <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search here..." />
                <button onClick={handleSearch} className="button">Search</button>
            </div>
            <div className='lesson-container-parent'>
                <div className='lesson-filter'>
                    <div style={{ display: 'flex', flexDirection: 'column', padding: '18px' }} >
                        <h4>Price</h4><br />
                        <div>
                            <input type="radio" id="$100 to $200" name='price' value='200' />
                            <label for="$100 to $200"> less then $200</label><br />
                        </div>
                        <div>
                            <input type="radio" id="$100 to $200" name='price' value='300' />
                            <label for="$100 to $200"> less than $300</label><br />
                        </div>
                        <div>
                            <input type="radio" id="$100 to $200" name='price' value='400' />
                            <label for="$100 to $200"> less than $400</label><br /><br />
                        </div>
                        <h4>Level</h4>
                        <div>
                            <input type="radio" id="Begineer" name='level' value='Begineer' />
                            <label for="Begineer"> Begineer</label><br />
                        </div>
                        <div>
                            <input type="radio" id="Intermediate" name='level' value='Intermediate' />
                            <label for="Intermediate"> Intermediate</label><br />
                        </div>
                        <div>
                            <input type="radio" id="Expert" name='level' value='Expert' />
                            <label for="Expert"> Expert</label><br /><br />
                        </div>
                        <h4>Age</h4>
                        <div>
                            <input type="radio" id="10 to 15" name='age' value='10 to 15' />
                            <label for="10 to 15"> from 10 to 15</label><br />
                        </div>
                        <div>
                            <input type="radio" id="15 to 20" name='age' value='15 to 20' />
                            <label for="15 to 20"> from 15 to 20</label><br />
                        </div>
                        <div>
                            <input type="radio" id="20 and elder" name='age' value='20 to elder' />
                            <label for="20 and elder"> from 20 and elder</label><br /><br />
                        </div>
                        <button className='button' onClick={handleFilter}>Apply Filter</button>
                    </div>
                </div>
                <div style={{ display: 'flex', width: '75%' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: "24px", padding: '24px' }}>
                        {lesson && lesson.length ? lesson.map(singleLesson => (
                            <LessonCard singleLesson={singleLesson} handleStar={handleStar} />
                        )) : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lessons