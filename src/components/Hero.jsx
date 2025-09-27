import React from 'react';
import './CSS/Hero.css'; // create this CSS file

export default function Hero() {
  return (
    <section className="hero p-5" id="home">
      <div className="hero-left text-light">
        <h1 className='text-light'>Renewable Energy • E‑Mobility • Energy Storage</h1>
        <p className="muted">
          shivoham Multy pvt ltd — sustainable solar EPC, EV charging & storage solutions for homes, business and franchise partners.
        </p>  
        <a className="cta" href="#contact">Get in touch</a>
      </div>
      <div className="hero-right">
        <div className="vision-card">
          <h3>Our Vision</h3>
          <p>To offer humanity a greener world for a better tomorrow — scalable rooftop and storage solutions.</p>
        </div>
      </div>
    </section>
  );
}