import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaRocket } from "react-icons/fa";
import "./CSS/Process.css";

export default function Process() {
  const steps = [
    {
      step: "Step 1",
      title: "Site Survey & Feasibility Study",
      description: "Comprehensive Site Survey & Feasibility Study for Optimized Solutions",
    },
    {
      step: "Step 2",
      title: "Customized Design & Proposal",
      description: "Tailored Design & Proposal to Match Your Unique Requirements",
    },
    {
      step: "Step 3",
      title: "Documentation & Net Metering Approval",
      description: "Complete Documentation & Net Metering Approval for Hassle-Free Compliance",
    },
    {
      step: "Step 4",
      title: "Material Procurement & Supply",
      description:
        "Efficient Material Procurement & Supply to Ensure Timely Project Execution.",
    },
    {
      step: "Step 5",
      title: "Installation & Commissioning",
      description:
        "Expert Installation & Seamless Commissioning for Reliable Performance",
    },
    {
      step: "Step 6",
      title: "Operation & Maintenance Support",
      description:
        "Reliable Operation & Maintenance Support for Long-Term Performance",
    },
  ];

  return (
    // <section id="process" className="container-xxl py-5">
    //   <div className="text-center mb-5">
    //     <h2 className="fw-bold">Our Process</h2>
    //     <p className="text-muted">Step-by-step guide for delivering efficient solar solutions.</p>
    //   </div>
    //   <div className="row justify-content-center g-4">
    //     {steps.map((s, i) => (
    //       <div key={i} className="col-md-4 col-sm-5 col-10 col-lg-3">
    //         <div className="process-card text-center p-4 shadow-lg rounded h-100">
    //           <div className="process-icon mb-3">
    //             <i className={`bi ${s.icon} fs-2 text-white`}></i>
    //           </div>
    //           <div className="process-step-number mb-2">{i + 1}</div>
    //           <h5 className="fw-bold">{s.title}</h5>
    //           <p className="text-muted">{s.text}</p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </section>
    <section className="process-section">
      <Container>
        <h2 className="section-title">Installation Process</h2>
        <div className="timeline">
          {steps.map((step, index) => (
            <div
              className={`timeline-step ${index % 2 === 0 ? "left" : "right"}`}
              key={index}
            >
              <div className="step-icon">{step.icon}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
          <div className="timeline-line"></div>
        </div>
      </Container>
    </section>
  );
}