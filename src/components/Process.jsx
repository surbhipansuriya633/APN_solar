import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaRocket } from "react-icons/fa";
import "./CSS/Process.css";

export default function Process() {
  const steps = [
    {
      step: "Step 1",
      title: "Site Visit",
      description:
        "We make sure our client gets all the information on the very first day of our visit with the POA of our work.",
    },
    {
      step: "Step 2",
      title: "Design & Documentation",
      description:
        "Making a clear view about the way the whole project will look like & PPA for Net metering Process.",
    },
    {
      step: "Step 3",
      title: "Fabrication & Installation",
      description:
        "A complete frame of GI structure with bolts & nuts for better strength & Installation according to the Single Line Diagram (SLD) with proper chain of Strings & Series.",
    },
    {
      step: "Step 4",
      title: "Commissioning & Net Meter",
      description:
        "Final step when the entire solar system ready to connect with Net Meter along with PPA.",
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
        <h2 className="section-title">Our Process</h2>
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