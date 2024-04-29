import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage/HomePage";
import RegistrationForm from "./RegistrationForm/RegistrationForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<div>Login Form Here</div>} />
        <Route path="/about" element={<div>About Us</div>} />
        <Route path="/contact" element={<div>Contact Information</div>} />
      </Routes>
    </Router>
  );
}

export default App;
