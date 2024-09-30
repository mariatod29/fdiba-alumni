import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-page-container">
      <div className="contact-person-container">
        <img src="/webpage-1.png" alt="contact-photo" />
        <h1>Contact</h1>
        <div className="contact-person-info">
          <p>Technical University of Sofia</p>
          <p>FDIBA</p>
          <p>Sofia 1756</p>
          <p>8 blvd. St. Kliment Ohridski, Block 10, 2 Floor</p>
          <p>Phone: +359 2 965 3213</p>
          <p>Email: contact[at]fdiba.tu-sofia.bg</p>
        </div>
      </div>
      <h3>Contact Person</h3>
      <div className="contact-person-container">
        <img src="/DStancheva.jpg" alt="DStancheva" />
        <div className="contact-person-info">
          <p>Detelina Stancheva</p>
          <p>Dean’s office</p>
          <p>Tel.: +359 2 965 3213</p>
          <p>detelina.stancheva@fdiba.tu-sofia.bg</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
