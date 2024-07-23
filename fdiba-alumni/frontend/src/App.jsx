import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePageWrapper from "./HomePage/HomePageWrapper";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import LoginPage from "./LoginPage/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePageWrapper />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<div>About Us</div>} />
        <Route path="/contact" element={<div>Contact Information</div>} />
      </Routes>
    </Router>
  );
}

export default App;
