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
    <section className="process-section" id="process">
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