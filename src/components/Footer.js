import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaArrowUp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>+966 54 002 7204, +966 50 372 9998</p>
          <p>info@contrateksa.com</p>
        </div>
        <div className="footer-location">
          <h3>Our Location</h3>
          <p>Ar Rabi District, 13315</p>
          <p>Riyadh, Saudi Arabia</p>
        </div>
        <div className="footer-links-inline">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Gallery</a>
          <a href="#">Contact</a>
        </div>
      </div>

      <div className="footer-bottom-inline">
        <div className="footer-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaTwitter /></a>
        </div>

        <p className="copyright">
          © 2025–2026 ContraTek Establishment. All rights reserved.
        </p>

        <button className="scroll-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
