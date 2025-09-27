import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaBullseye, FaEye } from "react-icons/fa";
import "./CSS/MissionVision.css"; // We'll create this CSS

export default function MissionVision() {
    return (
        <section className="mission-vision-solar pt-3">
            <div className="overlay"></div> {/* dark overlay for readability */}
            <Container>
                {/* <h2 className="section-title text-center mb-5 text-light">Our Mission & Vision</h2> */}
                <Row>
                    <Col md={6} className="mb-4">
                        <div className="solar-card mission-card text-dark bg-light">
                            <div className="icon">
                                <FaBullseye size={50} />
                            </div>
                            <h3>Our Mission</h3>
                            <p className="text-dark">
                                To provide innovative and sustainable solutions that empower our clients to achieve their energy goals efficiently and responsibly.
                            </p>
                        </div>
                    </Col>
                    <Col md={6} className="mb-4">
                        <div className="solar-card vision-card text-dark bg-light">
                            <div className="icon">
                                <FaEye size={50} />
                            </div>
                            <h3>Our Vision</h3>
                            <p className="text-dark">
                                To be a leading force in renewable energy and smart technology solutions, creating a greener, smarter, and more sustainable future for all.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    );
}
