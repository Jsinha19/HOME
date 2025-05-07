import React from 'react';
import Slider from 'react-slick';
import './Projects.css';

import img1 from '../assets/apsalt-project.webp';
import img2 from '../assets/portable.webp';
import img3 from '../assets/cabin.webp'; 

const projects = [
  {
    title: 'Al-Corniche Street, Jeddah (Asphalt Project)',
    image: img1,
  },
  {
    title: 'Premco(Portable Cabin Project)',
    image: img2,
  },
  {
    title: 'AJ Corporation(Porta Cabins Project)',
    image: img3,
  },
];

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
  };

  return (
    <section className="carousel-section">
      <h2 className="carousel-title">Our Projects</h2>
      <p className="carousel-subtitle">
        Take a look on some of our work and projects related to Asphalt and Portable Cabins
      </p>

      <Slider {...settings} className="carousel-slider">
        {projects.map((project, index) => (
          <div className="carousel-slide" key={index}>
            <img src={project.image} alt={project.title} className="carousel-image" />
            <div className="carousel-overlay">
              <h3>{project.title}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
