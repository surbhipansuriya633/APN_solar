import React from 'react';
import './CSS/About.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {
  return (
    <section id="about" className="about-section container">
      <div className="text-center ">
        <h2 className='text-center fw-bold'>About APN Solar</h2>
      </div>
      <div className="about-card">
        <p>
          APN Solar Energy Pvt. Ltd. Also known as (Alternative Power Network) are JV Manufacturer,
          Energy consultant and Engineering, Procurement, Construction (EPC) for residential,
          commercial and industrial power. We understand our customer’s energy consumption
          patterns and work out economically viable upon for switching to renewable energy sources.
        </p>
        <p className="about-note">
          APN established in the year 2017 at Mumbai and has expanded its Network at all Major
          Cities.
        </p>
      </div>
    </section>
  );
}
