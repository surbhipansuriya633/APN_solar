import React from "react";
import "./CSS/Contact.css";

import { MdAltRoute } from "react-icons/md";
import { BiEnvelope, BiGlobe } from "react-icons/bi";


export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container py-5 my-5">
        <div className="row">
          {/* Left Side - Contact Info */}
          <div className="col-12 col-lg-6 text-white px-sm-5 px-2 contact-info">
            <h2 className="fw-bold mb-4">Get in Touch</h2>
            <p className="mb-5">
              We’re here to help and answer any questions you might have.
              Reach out to us through the details below.
            </p>

            <div className="d-flex align-items-start mb-4">
              <div className="icon-box me-3">
                <MdAltRoute size={24} />
              </div>
              <div>
                <h6 className="fw-bold">Address</h6>
                <p className="mb-0">
                  321, royal square, near VIP circle, uttran, Surat, Gujarat, pincode 394101.
                </p>
              </div>
            </div>

            <div className="d-flex align-items-start mb-4">
              <div className="icon-box me-3">
                <BiEnvelope size={24} />
              </div>
              <div>
                <h6 className="fw-bold">Email</h6>
                <p className="mb-0 text-wrap">info.shivohaminternational@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="col-12 col-lg-6">
            <div className="contact-form-wrapper p-4 p-md-5 shadow-lg rounded bg-white">
              <h4 className="fw-bold mb-4 text-center text-dark">Send Us a Message</h4>
              <form>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
