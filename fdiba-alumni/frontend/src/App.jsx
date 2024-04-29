import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import RegistrationForm from "./RegistrationForm/RegistrationForm";

function Header() {
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

function HomePage() {
  return (
    <main>
      <h1>Welcome to the Alumni Network!</h1>
      <p>
        This network helps you stay connected with fellow alumni and leverage
        professional opportunities.
      </p>
      <div>
        <img src="/fdiba-event.jpg" alt="Alumni Event" />
      </div>
      <div className="buttons">
        <button onClick={() => (window.location.href = "/register")}>
          Register Now
        </button>
        <button onClick={() => (window.location.href = "/login")}>Login</button>
      </div>
    </main>
  );
}

function Footer() {
  return (
    <div className="footer">
      <p>
        Contact us at:{" "}
        <a href="mailto:contact@fdiba.tu-sofia.bg">contact@fdiba.tu-sofia.bg</a>
      </p>
      <p>Follow us on social media: </p>
      <a href="https://www.facebook.com/FDIBA.TU.SOFIA">Facebook</a>
      <a href="https://www.instagram.com/fdiba.tu.sofia/">Instagram</a>
      <a href="https://www.linkedin.com/company/fdiba/">LinkedIn</a>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<div>Login Form Here</div>} />
        <Route path="/about" element={<div>About Us</div>} />
        <Route path="/contact" element={<div>Contact Information</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
