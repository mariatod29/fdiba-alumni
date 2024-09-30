import React, { useEffect } from "react";
import { observer } from "mobx-react";
import profileStore from "../../stores/ProfileStore";
import "./ProfilePage.css";

const ProfilePage = observer(() => {
  useEffect(() => {
    const email = "201220029@fdiba.tu-sofia.bg"; 
    profileStore.fetchProfile(email);
  }, []);

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      {profileStore.profile ? (
        <div className="profile-details">
          <p>
            <strong>Name:</strong> {profileStore.profile.firstName} {profileStore.profile.lastName}
          </p>
          <p>
            <strong>Email:</strong> {profileStore.profile.email}
          </p>
          <p>
            <strong>Phone number:</strong> {profileStore.profile.phoneNumber}
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href={profileStore.profile.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
            >
              {profileStore.profile.linkedIn}
            </a>
          </p>
          <p>
            <strong>Degree Programme:</strong>{" "}
            {profileStore.profile.degreeProgramme}
          </p>
          <p>
            <strong>University Degree:</strong>{" "}
            {profileStore.profile.universityDegree}
          </p>
          <p>
            <strong>Year of Graduation:</strong>{" "}
            {profileStore.profile.yearOfGraduation}
          </p>
          <p>
            <strong>Organization:</strong> {profileStore.profile.organization}
          </p>
          <p>
            <strong>Position:</strong> {profileStore.profile.position}
          </p>
          <p>
            <strong>Roles in Organization:</strong>{" "}
            {profileStore.profile.rolesInFdibaAlumni
              ? profileStore.profile.rolesInFdibaAlumni.join(", ")
              : "No roles available"}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <button
        className="edit-profile-button"
        onClick={() => (window.location.href = "/edit-profile")}
      >
        Edit Profile
      </button>
    </div>
  );
});

export default ProfilePage;
