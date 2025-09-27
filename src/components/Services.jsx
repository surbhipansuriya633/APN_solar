import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/Services.css'; // We'll create this for custom styles

export default function Services() {
  const items = [
    {
      title: 'Solar EPC & Development',
      desc: 'Rooftop design, installation, commissioning and O&M.',
      icon: 'bi-sun-fill'
    },
    // {
    //   title: 'Energy Storage Systems',
    //   desc: 'Li‑ion battery solutions integrated with solar for 24/7 power.',
    //   icon: 'bi-battery-half'
    // },
    {
      title: 'E‑Mobility & EV Chargers',
      desc: 'Small-footprint IoT-powered EV charging stations and swap solutions.',
      icon: 'bi-plug-fill'
    },
    // {
    //   title: 'Franchise Partner Program',
    //   desc: 'Startup franchise, channel partners and distribution models.',
    //   icon: 'bi-people-fill'
    // }
  ];


  return (
    <section id="services" className="container-xxl py-5" style={{ backgroundImage: "url('https://media.istockphoto.com/id/2168595801/photo/solar-power-station-and-wind-power-station-at-sunrise.webp?a=1&b=1&s=612x612&w=0&k=20&c=HfLR3dlJfo_xGKu0aSkfJVdC_LpuqrBUI7ltUQ-VcyA=')", backgroundRepeat: "no-repeat", backgroundPosition: 'right', backgroundSize: "70%" }}>
      <div className="text-center mb-5">
        <h2 className="fw-bold">Our Services</h2>
        <p className="text-muted">Innovative energy solutions for homes, businesses, and partners.</p>
      </div>
      <div className="row justify-content-center g-4">
        {items.map((it, idx) => (
          <div key={idx} className="col-md-4 col-sm-5 col-10 col-lg-3">
            <div className="service-card p-4 text-center h-100 shadow-lg rounded">
              <div className="service-icon mb-3">
                <i className={`bi ${it.icon} fs-1 text-warning`}></i>
              </div>
              <h5 className="fw-bold mb-2">{it.title}</h5>
              <p className="text-muted">{it.desc}</p>
              <a href="#contact" className="btn btn-outline-primary mt-3">Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
