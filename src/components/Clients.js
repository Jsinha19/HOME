import React from 'react';
import './Clients.css';


import first from '../assets/smn.png';
import second from '../assets/shib.jpg';
import third from '../assets/ali.jpg';
import fourth from '../assets/lake.jpg';
import fifth from '../assets/gac.jpg';
import sixth from '../assets/cont.jpg';
import seventh from '../assets/al.jpg';
import eight from '../assets/i.jpg';
import nine from '../assets/a.jpg';

const clients = [
  { src: first, alt: 'SMN Industrial Services' },
  { src: second, alt: 'SMN Industrial Services' },
  { src: third, alt: 'SMN Industrial Services' },
  { src: fourth, alt: 'SMN Industrial Services' },
  { src: fifth, alt: 'SMN Industrial Services' },
  { src: sixth, alt: 'SMN Industrial Services' },
  { src: seventh, alt: 'SMN Industrial Services' },
  { src: eight, alt: 'SMN Industrial Services' },
  { src: nine, alt: 'SMN Industrial Services' },

];

export default function ClientsSection() {

  return (
    <section className="clients-section">
      <h2 className="clients-title">Our Clients</h2>
      <div className="clients-grid">
        {clients.map((client, index) => (
          <div key={index} className="client-card">
            <img src={client.src} alt={client.alt} className="client-logo" />
          </div>
        ))}
      </div>
    </section>
  );
}

