import React from "react";
import { Link } from "react-router-dom";
import "./HomePageHeader.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export default function HomePageHeader() {
  return (
    <div className="header">
      <div className="headingContainer">
        <img src="/fdiba-logo.png" alt="FDIBA Logo" className="logo" />
        <h3>FDIBA Alumni</h3>
      </div>
      <ul className="navigationList">
        <li className="navigationItem">
          <Link to="/">Home</Link>
        </li>
        <li className="navigationItem">
          <Link to="/about">About</Link>
        </li>
        <li className="navigationItem">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
