import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './CSS/Process.css';

export default function Process() {
  const steps = [
    { title: 'Site Visit', text: 'Survey and initial PPA discussion & net-metering paperwork.', icon: 'bi-geo-alt-fill' },
    { title: 'Design & Documentation', text: 'Structural GI design, single-line diagrams and approvals.', icon: 'bi-pencil-square' },
    { title: 'Fabrication & Installation', text: 'GI structure, module mounting, electrical connections.', icon: 'bi-tools' },
    { title: 'Commissioning & Net Meter', text: 'Testing, commissioning and net-meter activation.', icon: 'bi-check-circle-fill' }
  ];

  return (
    <section id="process" className="container-xxl py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Our Process</h2>
        <p className="text-muted">Step-by-step guide for delivering efficient solar solutions.</p>
      </div>
      <div className="row justify-content-center g-4">
        {steps.map((s, i) => (
          <div key={i} className="col-md-4 col-sm-5 col-10 col-lg-3">
            <div className="process-card text-center p-4 shadow-lg rounded h-100">
              <div className="process-icon mb-3">
                <i className={`bi ${s.icon} fs-2 text-white`}></i>
              </div>
              <div className="process-step-number mb-2">{i + 1}</div>
              <h5 className="fw-bold">{s.title}</h5>
              <p className="text-muted">{s.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}