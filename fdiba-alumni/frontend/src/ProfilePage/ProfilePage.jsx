import React, { useEffect, useState } from "react";
import "./ProfilePage.css";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    degreeProgramme: "",
    universityDegree: "",
    yearOfGraduation: "",
    organization: "",
    position: "",
  });

  useEffect(() => {
    // Fetch user profile data from the backend
    const fetchProfile = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/profile");
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <div className="profile-details">
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Phone:</strong> {profile.phone}</p>
        <p><strong>LinkedIn:</strong> <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">{profile.linkedin}</a></p>
        <p><strong>Degree Programme:</strong> {profile.degreeProgramme}</p>
        <p><strong>University Degree:</strong> {profile.universityDegree}</p>
        <p><strong>Year of Graduation:</strong> {profile.yearOfGraduation}</p>
        <p><strong>Organization:</strong> {profile.organization}</p>
        <p><strong>Position:</strong> {profile.position}</p>
      </div>
      <button className="edit-profile-button" onClick={() => window.location.href = "/edit-profile"}>
        Edit Profile
      </button>
    </div>
  );
};

export default ProfilePage;
