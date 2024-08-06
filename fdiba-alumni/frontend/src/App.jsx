import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePageWrapper from "./HomePage/HomePageWrapper";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import LoginPage from "./LoginPage/LoginPage";
<<<<<<< Updated upstream
=======
import Dashboard from "./Dashboard/Dashboard";
import ProfilePage from "./ProfilePage/ProfilePage";
import EditProfilePage from "./EditProfilePage/EditProfilePage";
import AboutUs from "./AboutUsPage/AboutUsPage";
import ContactPage from "./ContactPage/ContactPage";
>>>>>>> Stashed changes

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePageWrapper />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginPage />} />
<<<<<<< Updated upstream
        <Route path="/about" element={<div>About Us</div>} />
        <Route path="/contact" element={<div>Contact Information</div>} />
=======
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/edit-profile" element={<EditProfilePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
>>>>>>> Stashed changes
      </Routes>
    </Router>
  );
}

export default App;
