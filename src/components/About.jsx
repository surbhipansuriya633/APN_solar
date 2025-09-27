import React from 'react';
import './CSS/About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaHardHat,
  FaProjectDiagram,
  FaTools,
  FaCogs,
  FaBoxOpen,
  FaChartLine,
} from "react-icons/fa";

export default function About() {
  const expertise = [
    { icon: <FaHardHat />, title: "Design & Engineering", color: "warning" },
    { icon: <FaProjectDiagram />, title: "Project Management", color: "info" },
    // { icon: <FaCogs />, title: "Erection & Commissioning", color: "success" },
    // { icon: <FaBoxOpen />, title: "Supply of Materials", color: "danger" },
    { icon: <FaTools />, title: "Operation & Maintenance", color: "primary" },
    { icon: <FaChartLine />, title: "Monitoring System", color: "dark" },
  ];

  return (
    <section className="about-section py-5" id="about">
      <Container >
        {/* ABOUT TEXT */}
        <Row className="mb-5">
          <Col className="">
            <h2 className="fw-bold mb-3 section-title">ABOUT US</h2>
            <p className="">
              Shivoham Multy Pvt. Ltd. (Alternative Power Network) is a joint-venture manufacturer, energy consultancy, and EPC contractor delivering sustainable power solutions for residential, commercial, and industrial sectors. We specialize in cost-effective renewable energy solutions tailored to your needs.
            </p>
            <p className="">
              We are a leading solar installation company, providing reliable and sustainable solar energy solutions. From small rooftop systems to large ground-mounted projects, we deliver customized solar solutions to reduce electricity costs and promote clean energy.
            </p>
            <p className="">
              At Shivoham Multy Pvt Ltd, we believe in creating a brighter and sustainable tomorrow powered by the sun. As a trusted EPC contractor and energy consultant, we provide end-to-end solar solutions for residential, commercial, and industrial sectors. Our mission is to make renewable energy affordable, reliable, and accessible for everyone.
            </p>

          </Col>
        </Row>

        {/* AREAS OF EXPERTISE */}
        <Row className="mb-4">
          <Col className="text-center">
            <h3 className="fw-bold text-uppercase mb-4">Our Areas of Expertise</h3>
          </Col>
        </Row>

        <Row className="g-4">
          {expertise.map((item, index) => (
            <Col lg={3} md={3} sm={6} className='col-6' key={index}>
              <Card className="expertise-card text-center p-4 h-100 m-auto">
                <div className={`icon-wrapper text-${item.color}`}>
                  {React.cloneElement(item.icon, { size: 24 })}
                </div>
                <h6 className="fw-bold">{item.title}</h6>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
