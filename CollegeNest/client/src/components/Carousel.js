// Carousel.js

import React from "react";
import "./Carouse.css"; // Import the CSS file for styles

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="image">
        <img
          className="animated delay-200 animate__bounceInLeft"
          src="/images/abvgiet2.jpeg"
          alt="First slide"
        />
      </div>

      <div className="image">
        <img
          className="animated delay-500 animate__bounceInDown"
          src="/images/abvgiet3.jpeg"
          alt="Second slide"
        />
      </div>

      <div className="image">
        <img
          className="animated delay-1000 animate__backInRight"
          src="/images/abvgiet.jpeg"
          alt="Third slide"
        />
      </div>
    </div>
  );
};

export default Carousel;