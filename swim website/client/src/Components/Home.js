import React from 'react'
import Navbar from './Navbar'

import BannerImage from "../Assets/bg.jpg";

import { FiArrowRight } from "react-icons/fi";

const home = () => {
  return (
    <>
      <div className="home-container">
        <Navbar />
        <div className="home-banner-container">
          <div className="home-text-section">
            <h1 className="primary-heading">
              Welcome to Swim Services</h1>
            <p className="primary-text">
              Best place to take swimming lessons in Ottawa!
            </p>
            <button className="secondary-button">
              Call Us <FiArrowRight />{" "}
            </button>
          </div>
          <div className="home-image-section">
            <img src={BannerImage} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default home