import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { observer } from "mobx-react-lite";
import "./App.css";
import HomePageWrapper from "./pages/HomePage/HomePageWrapper";
import RegistrationForm from "./pages/RegistrationForm/RegistrationForm";
import LoginPage from "./pages/LoginPage/LoginPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import EditProfilePage from "./pages/EditProfilePage/EditProfilePage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import ContactPage from "./pages/ContactPage/ContactPage";


const App = observer(() => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePageWrapper />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/edit-profile" element={<EditProfilePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
});

export default App;
