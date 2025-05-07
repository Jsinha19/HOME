import React from 'react';
import Slider from 'react-slick';
import './Services.css';

import img1 from '../assets/apsalt.webp'; 
import img2 from '../assets/portable.webp';   
import img3 from '../assets/heavy-duty.webp';

const services = [
  {
    title: 'Asphalt Paving & Milling',
    description: 'ContraTek provides all kind of Asphalt solutions, which include heavy duty Asphalt paving and milling services.',
    image: img1,
  },
  {
    title: 'Portable Cabin Manufacturing',
    description: 'Installation of modern, mobile, and durable portable cabins for diverse industrial uses.',
    image: img2,
  },
  {
    title: 'Heavy Duty Equipment Rental',
    description: 'Expert road crack repair, pothole patching, and milling for smooth surface restoration.',
    image: img3,
  },
];

export default function Services() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <section className="services-section">
      <h2 className="services-title">Our Services</h2>
      <p className="services-subtitle">Explore our services provided</p>

      <div className="carousel-wrapper">
        <Slider {...settings}>
          {services.map((service, index) => (
            <div className="service-slide" key={index}>
              <img src={service.image} alt={service.title} className="service-image" />
              <div className="service-overlay">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

