import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'

const Registration = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <Navbar />
            <div className="register-wrapper">
                <h2>Registration</h2>
                <form action="#">
                    <div className="input-box">
                        <input type="text" placeholder="Enter your name" required />
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Enter your email" required />
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Enter your Phone NUmber" required />
                    </div>
                    <div className="select-menu">
                        <div className="select-btn" onClick={() => setOpen(!open)}>
                            <span className="sBtn-text">Select your option</span>
                            <i className="bx bx-chevron-down"></i>
                        </div>
                        {open ?
                            <ul className="options">
                                <li className="option">
                                    <i className="bx bxl-github" style={{ color: '#171515' }}></i>
                                    <span className="option-text">Swimming begineer lessons for Kids/Teens</span>
                                </li>
                                <li className="option">
                                    <i className="bx bxl-instagram-alt" style={{ color: '#E1306C' }}></i>
                                    <span className="option-text">Swimming intermediate lessons for Kids/Teens</span>
                                </li>
                                <li className="option">
                                    <i className="bx bxl-linkedin-square" style={{ color: '#0E76A8' }}></i>
                                    <span className="option-text">Swimming expert lessons for Kids/Teens</span>
                                </li>
                                <li className="option">
                                    <i className="bx bxl-facebook-circle" style={{ color: '#4267B2' }}></i>
                                    <span className="option-text">Swimming begineer lessons for Adults</span>
                                </li>
                                <li className="option">
                                    <i className="bx bxl-twitter" style={{ color: '#1DA1F2' }}></i>
                                    <span className="option-text">Swimming intermediate lessons for Adults</span>
                                </li>
                                <li className="option">
                                    <i className="bx bxl-linkedin-square" style={{ color: '#0E76A8' }}></i>
                                    <span className="option-text">Swimming expert lessons for Adults</span>
                                    </li>
                            </ul> : null}
                    </div>
                    <div className="input-box button">
                        <input type="Submit" value="Register Now" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Registration