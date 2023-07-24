import React from 'react'
import Navbar from './Navbar'
import AboutUsImage from "../Assets/about-us.jpg";

const AboutUs = () => {
    return (
        <div>
            <Navbar />
            <section className="about-us">
                <div className="about">
                    <img src={AboutUsImage} className="pic" />
                    <div className="text">
                        <h2>About Us</h2>
                        <h5>Swimming <span>for all</span></h5>
                        <p>At Swim Services, we are passionate about water safety, skill development, and fostering a love for swimming. Our swimming classes are designed to cater to swimmers of all ages and skill levels, from beginners to advanced athletes. We believe that swimming is not only a life-saving skill but also a recreational activity that brings joy and relaxation.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs