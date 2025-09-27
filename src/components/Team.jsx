import React from "react";
import './CSS/Team.css'
export default function Team() {
  const members = [
    { name: "Kishankumar Tank", role: "Founder", contact: "84691 29147" },
    { name: "H C Gajjar", role: "Project Manager", contact: "90540 31131" },
    { name: "Hirenbhai Patel", role: "Installation Team Leader", contact: "98565 71111" },
    { name: "Dhavalbhai", role: "Technical Head / Electrical Engineer", contact: "80004 24344" }
  ];

  return (
    <section id="team" className="team-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Meet Our Team</h2>
          <p className="text-muted">Our dedicated leadership and management team</p>
        </div>

        <div className="row g-4">
          {/* {members.map((m, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-lg-3">
              <div className="team-card h-100 shadow-lg border-0 text-center p-3">
                <div className="card-body d-flex flex-column justify-content-between">
                  <p className="role-badge">{m.role}</p>
                  <h5 className="card-title fw-bold">{m.name}</h5>
                  <a href={`tel:${m.contact}`} className="text-decoration-none mt-1">
                    <p className="contact-text">+91 {m.contact}</p>
                  </a>
                </div>
              </div>
            </div>
          ))} */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="team-card h-100 shadow-lg border-0 text-center p-3">
              <div className="card-body d-flex flex-column justify-content-between">
                <p className="role-badge  mt-4">Kishankumar Tank</p>
                <h5 className="card-title fw-bold mt-2">Founder</h5>
                <a href={`tel:84691 29147`} className="text-decoration-none mt-1">
                  <p className="contact-text">+91 84691 29147</p>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="team-card h-100 shadow-lg border-0 text-center p-3">
              <div className="card-body d-flex flex-column justify-content-between">
                <p className="role-badge mt-4">H C Gajjar</p>
                <h5 className="card-title fw-bold mt-2">Project Manager</h5>
                <a href={`tel:9054031131`} className="text-decoration-none mt-1">
                  <p className="contact-text">+91 90540 31131</p>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="team-card h-100 shadow-lg border-0 text-center p-3">
              <div className="card-body d-flex flex-column justify-content-between">
                <p className="role-badge">Technical Head / Electrical Engineer</p>
                <h5 className="card-title fw-bold">Dhavalbhai</h5>
                <a href={`tel:8000424344`} className="text-decoration-none mt-1">
                  <p className="contact-text">+91 80004 24344</p>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="team-card h-100 shadow-lg border-0 text-center p-3">
              <div className="card-body d-flex flex-column justify-content-between">
                <p className="role-badge">Installation Team Leader</p>
                <h5 className="card-title fw-bold">Hirenbhai Patel</h5>
                <a href={`tel:9856571111`} className="text-decoration-none mt-1">
                  <p className="contact-text">+91 98565 71111</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}