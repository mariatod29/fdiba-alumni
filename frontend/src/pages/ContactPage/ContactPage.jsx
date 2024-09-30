import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-page-container">
      <h1>Contact</h1>
      <div className="contact-container">
        <img src="/fdiba-event.jpg" alt="fdiba-background" />
        <div className="contact-person-info">
          <p>Technical University of Sofia</p>
          <p>FDIBA</p>
          <p>Sofia 1756</p>
          <p>8 blvd. St. Kliment Ohridski, Block 10, 2 Floor</p>
          <p>Phone: +359 2 965 3213</p>
          <p>
            Email:{" "}
            <a href="mailto:contact@fdiba.tu-sofia.bg">
              contact@fdiba.tu-sofia.bg
            </a>
          </p>
        </div>
      </div>
      <h3>Contact Person</h3>
      <div className="contact-person-container">
        <img src="/DStancheva.jpg" alt="DStancheva" />
        <div className="contact-person-info">
          <p>Detelina Stancheva</p>
          <p>Dean’s office</p>
          <p>Phone: +359 2 965 3213</p>
          <p>
            Email:{" "}
            <a href="mailto:detelina.stancheva@fdiba.tu-sofia.bg">
              detelina.stancheva@fdiba.tu-sofia.bg
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
