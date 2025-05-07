import React from 'react';
import './Contact.css';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <p className="contact-text">
        For any instant queries within Jeddah and Riyadh regarding Road Construction, reach us at
      </p>
      <div className="contact-phone">
        <i className="fas fa-phone-alt"></i>
        <span>+966 54 002 7204</span>
      </div>
      <button className="contact-button">Contact</button>
    </section>
  );
};

export default ContactSection;

