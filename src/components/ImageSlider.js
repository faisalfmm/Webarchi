// src/components/ImageSlider.js
import React from 'react';
import Slider from 'react-slick';
import './ImageSlider.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const images = [
    'https://images.unsplash.com/photo-1487958449943-2429e8be8625?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww',
    'https://blog.architizer.com/wp-content/uploads/16482749797327._A_graphical_composition-scaled.jpg',
    'https://cdn.prod.website-files.com/620e4101b2ce12a1a6bff0e8/65a60ab44a41a5412c9bcc9c_10%20Best%20Architecture%20Schools%20In%20The%20World.jpg',
    'https://c4.wallpaperflare.com/wallpaper/798/813/291/architecture-modern-clear-sky-wallpaper-preview.jpg',
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Slide ${index + 1}`} className="slider-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
