import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/Services.css'; // We'll create this for custom styles
import { BsPlugFill, BsSunFill } from 'react-icons/bs';
import { FaBolt, FaCogs, FaDraftingCompass, FaProjectDiagram, FaRegFileAlt, FaSolarPanel, FaTools } from 'react-icons/fa';

export default function Services() {
  const items = [
    {
      title: 'Rooftop Solar Installation',
      desc: 'Rooftop design, installation, commissioning and O&M.',
      icon: <FaTools size={24} className='text-danger' />
    },
    {
      title: 'Ground Mounted Solar Projects',
      desc: 'Efficient Ground-Mounted Solar Projects for Maximum Energy Harvest.',
      icon: <FaProjectDiagram size={24} className='text-danger' />
    },
    {
      title: 'Solar EPC',
      desc: 'Comprehensive Solar EPC Solutions from Design to Commissioning',
      icon: <FaCogs size={24} className='text-danger' />
    }, {
      title: 'Operation & Maintenance (O&M)',
      desc: 'Proactive Operation & Maintenance (O&M) Services for Sustained Solar Performance.',
      icon: <FaRegFileAlt size={24} className='text-danger' />
    },
    {
      title: 'Solar Power Plant Designing & Consultancy',
      desc: 'Expert Solar Power Plant Designing & Consultancy for Optimal Energy Solutions.',
      icon: <FaDraftingCompass size={40} className='text-danger' />
    },
    {
      title: 'Net-Metering Support & Documentation',
      desc: 'Seamless Net-Metering Support & Documentation for Hassle-Free Approval.',
      icon: <FaBolt size={40} className='text-danger' />
    },
  ];


  return (
    <section id="services" className="container-xxl py-5" style={{ backgroundImage: "url('https://media.istockphoto.com/id/2168595801/photo/solar-power-station-and-wind-power-station-at-sunrise.webp?a=1&b=1&s=612x612&w=0&k=20&c=HfLR3dlJfo_xGKu0aSkfJVdC_LpuqrBUI7ltUQ-VcyA=')", backgroundRepeat: "no-repeat", backgroundPosition: 'right', backgroundSize: "70% 100%" }}>
      <div className="text-center mb-5">
        <h2 className="fw-bold">Our Services</h2>
        <p className="text-muted">Innovative energy solutions for homes, businesses, and partners.</p>
      </div>
      <div className="row justify-content-center g-4">
        {items.map((it, idx) => (
          <div key={idx} className="col-md-4 col-sm-5 col-10 col-lg-3 m-1 my-3">
            <div className="service-card p-4 text-center h-100 shadow-lg rounded">
              <div className="service-icon mb-3">
                {it.icon}
              </div>
              <h5 className="fw-bold mb-2">{it.title}</h5>
              <p className="text-muted">{it.desc}</p>
              {/* <a href="#contact" className="btn btn-outline-primary mt-3">Learn More</a> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
