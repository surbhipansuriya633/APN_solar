import React from 'react';
import './CSS/Hero.css'; // create this CSS file

export default function Hero() {
  return (
    <section className="hero p-md-5 p-3" id="home">
      <div className="hero-left text-light  m-md-5 m-0">
        <h1 className='text-light'>Renewable Energy • E‑Mobility • Energy Storage</h1>
        <p className="muted">
          Shivoham Multy Services — sustainable solar EPC, EV charging & storage solutions for homes, business and franchise partners.
        </p>
        <a className="cta" href="#contact">Get in touch</a>
      </div>
    </section>
  );
}