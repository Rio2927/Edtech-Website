import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";  
import img1 from "../Images/Slider Images/logoipsum.jpg";
import img2 from "../Images/Slider Images/greenish.jpg";
import img3 from "../Images/Slider Images/sitemark.jpg";
import img4 from "../Images/Slider Images/pinpoint.jpg";

function ImgSlider() {
    
 
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    
    <div className="slider-container">
      <Slider {...settings}>
        <div>
        <img className="d-block w-10" src={img1} alt="First slide"></img>
        </div>
        <div>
        <img className="d-block w-10" src={img2} alt="Second slide"></img> 
        </div>
        <div>
        <img className="d-block w-10" src={img3} alt="Third slide"></img>
        </div>
        <div>
        <img className="d-block w-10" src={img4} alt="Fourth slide"></img>
        </div>
      </Slider>
    </div>
  );
}

export default ImgSlider;
