import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Home.css";
import logo from "../assets/logo.webp";
import videoBg from "../assets/video5.mp4"; 

const Home = () => {
  return (
    <div className="hero-section">
      <div className="hamburger-menu">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="hero-carousel"
      >
        <SwiperSlide>
          <div className="hero-slide">
            <video className="video-bg" autoPlay muted loop>
              <source src={videoBg} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="hero-content">
              <img src={logo} alt="ContraTek Logo" className="logo" />
              <h2>Welcome to</h2>
              <h1>ContraTek Establishment</h1>
              <p>Road Construction Contractors and Porta Cabin Manufacturers</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="hero-slide slide2">
            <div className="hero-content">
              <img src={logo} alt="ContraTek Logo" className="logo" />
              <h2>We are Professional</h2>
              <h1>Porta Cabin Manufacturing</h1>
              <p>
                We Provide All Kinds of Prefabricated Building Solutions And
                Portable Cabins At your Service Within No Time.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="hero-slide slide3">
            <div className="hero-content">
              <img src={logo} alt="ContraTek Logo" className="logo" />
              <h2>We are dedicated</h2>
              <h1>Heavy Duty Equipment</h1>
              <p>
                We Provide Necessesary Equipment With Professional Operation in
                Attractive Prices.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;


