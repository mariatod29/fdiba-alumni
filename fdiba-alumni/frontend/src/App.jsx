import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePageWrapper from "./HomePage/HomePageWrapper";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import LoginPage from "./LoginPage/LoginPage";
import Dashboard from "./Dashboard/Dashboard";
import ProfilePage from "./ProfilePage/ProfilePage";
import EditProfilePage from "./EditProfilePage/EditProfilePage";
import AboutUs from "./AboutUsPage/AboutUsPage";
import ContactPage from "./ContactPage/ContactPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePageWrapper />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/edit-profile" element={<EditProfilePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
