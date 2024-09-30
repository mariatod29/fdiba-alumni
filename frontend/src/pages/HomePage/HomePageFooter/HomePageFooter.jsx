import React from "react";
import "./HomePageFooter.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export default function HomePageFooter() {
  return (
    <div className="footer">
      <div className="email-container">
        <p>
          Contact us at:{" "}
          <a href="mailto:contact@fdiba.tu-sofia.bg">
            contact@fdiba.tu-sofia.bg
          </a>
        </p>
      </div>
      <div className="social-media-container">
        <p>Follow us on social media: </p>
        <div>
          <a href="https://www.facebook.com/FDIBA.TU.SOFIA">
            <img src="/facebook-logo.png" alt="Facebook" className="icon" />
          </a>
          <a href="https://www.instagram.com/fdiba.tu.sofia/">
            <img src="/instagram-logo.png" alt="Instagram" className="icon" />
          </a>
          <a href="https://www.linkedin.com/company/fdiba/">
            <img src="/linkedin-logo.png" alt="LinkedIn" className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
