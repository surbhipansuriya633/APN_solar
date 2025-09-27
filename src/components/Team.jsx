import React from "react";

export default function Team() {
  const members = [
    {
      name: "Kishankumar Tank",
      role: "Founder",
      contact: "84691 29147"
    },
    {
      name: "H C Gajjar",
      role: "Project Manager",
      contact: "90540 31131"
    },
    {
      name: "Hirenbhai Patel",
      role: "Installation Team Leader",
      contact: "98565 71111"
    },
    {
      name: "Dhavalbhai",
      role: "Technical Head  / Electrical Engineer",
      contact: "80004 24344"
    }
  ];

  return (
    <div className="bg-opacity-25 bg-danger">
      <section id="team" className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Meet Our Team</h2>
          <p className="text-muted">Our dedicated leadership and management team</p>
        </div>

        <div className="row g-4">
          {members.map((m, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-lg-3">
              <div className="card h-100 shadow-lg border-0 text-center p-3 pb-1">
                <div className="card-body">
                  <h5 className="card-title fw-bold">{m.name}</h5>
                  <p className="card-text  py-2">{m.role}</p>
                  <a href={`tel:${m.contact}`} className="text-decoration-none my-auto"><p className="card-text text-danger fw-bold">{m.contact}</p></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}