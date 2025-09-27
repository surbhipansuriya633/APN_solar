import React from "react";

export default function Team() {
  const members = [
    {
      name: "Ms. Sheetal Khavadiya",
      role: "Co-Founder & CTO",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8R8QqmvD2GHfMgcUODxvVme8Cm6unpEDQ8w&s" // replace with real image URL
    },
    {
      name: "Mr. Pravin Nadar",
      role: "Founder & CEO",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJEABy10QnLp_dlJWIWx8KKu7rV9L6MBKUyeIkuGRMUqYu8VM3F_G4O0YtvXU1j4id_24&usqp=CAU"
    },
    {
      name: "Mr. Prafancis Nadar",
      role: "Manager – Sales & Marketing",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrAC5gxs-sTA0DwgCsQKPAgE37kujIeoccNeLpiWqwURP1ndCpaVowvJEkZaXqABhBXmU&usqp=CAU"
    },
    {
      name: "Mr. Rahul Parmar",
      role: "Project Head",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFDFGjkuIiNmag3Pu06UW_6ZD8ix915D3fgu0I1-u4kSP48igKhZOKLHwdejwXnZ43QKc&usqp=CAU"
    }
  ];

  return (
    <section id="team" className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Meet Our Team</h2>
        <p className="text-muted">Our dedicated leadership and management team</p>
      </div>

      <div className="row g-4">
        {members.map((m, idx) => (
          <div key={idx} className="col-12 col-sm-6 col-lg-3">
            <div className="card h-100 shadow-lg border-0 text-center p-3">
              <img
                src={m.img}
                alt={m.name}
                className="rounded-circle mx-auto d-block"
                style={{ width: "120px", height: "120px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">{m.name}</h5>
                <p className="card-text text-muted">{m.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}