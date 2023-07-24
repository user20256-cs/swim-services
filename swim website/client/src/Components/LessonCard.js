import React, { useState } from 'react'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import AboutUsImage from "../Assets/about-us.jpg";

const LessonCard = ({ singleLesson, handleStar }) => {
    const [open, setOpen] = useState(false)

    const stars = ['*', '*', '*', '*', '*']

    return (
        <div className="card swiper-slide">
            <div className="image-box">
                <img src={AboutUsImage} alt="" />
            </div>
            <div onClick={() => setOpen(!open)} className="profile-details">
                <div>
                    <h3 className="name">{singleLesson.title}</h3>
                    <h4 className="job">{singleLesson.shortDesc}</h4>
                    <h4 className="job">{singleLesson.price}</h4>
                    <h4 className="job">{singleLesson.age}</h4>
                    <h4 className="job">{singleLesson.level}</h4>
                </div>
            </div>
            {open ? <div style={{ display: 'flex', flexDirection: "column", padding: '6px' }}>
                <h4 className='profile-desc'>{singleLesson.Desc}</h4>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex' }}>
                        {stars.map((singleStar, index) => (
                            <button onClick={() => handleStar(singleLesson._id, index + 1)} style={{ color: '#4070f4', border: 'none', cursor: 'pointer' }}>
                                {singleLesson.star >= (index + 1) ?
                                    <AiFillStar style={{ color: 'orange', height: '20px', width: '20px' }} />
                                    : <AiOutlineStar style={{ color: 'orange', height: '20px', width: '20px' }} />
                                }
                            </button>
                        ))}
                    </div>
                    <div style={{ display: 'flex' }}>
                        <AiFillStar style={{ color: 'orange', height: '20px', width: '20px' }} />
                        {singleLesson.star}
                    </div>
                </div>
            </div> : null}
        </div>
    )
}

export default LessonCard