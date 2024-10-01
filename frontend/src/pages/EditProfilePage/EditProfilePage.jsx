import React, { useEffect } from "react";
import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";
import { observer } from "mobx-react";
import profileStore from "../../stores/ProfileStore";
import "./EditProfilePage.css";
import { rolesInFdibaAlumni } from "../../constants/rolesInFdibaAlumni";
import { universityDegrees } from "../../constants/universityDegrees";
import { degreeProgrammes } from "../../constants/degreeProgrammes";
import HomePageHeader from "../HomePage/HomePageHeader/HomePageHeader";

const EditProfilePage = observer(() => {
  useEffect(() => {
    const email = "201220029@fdiba.tu-sofia.bg";
    profileStore.fetchProfile(email);
  }, []);

  const handleChangeInput = (fieldName) => (e) => {
    profileStore.setFormData(fieldName, e.target.value);
  };

  const handleChangeDropdown = (fieldName, selectedOptions) => {
    const values = Array.isArray(selectedOptions)
      ? selectedOptions.map((option) => option.value)
      : selectedOptions.value;
    profileStore.setFormData(fieldName, values);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await profileStore.updateProfile();
    alert("Profile updated successfully!");
    window.location.href = "/profile";
  };

  if (!profileStore.profile) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <HomePageHeader />
      <div className="form-container">
        <h2>Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <label>
            First name:
            <input
              type="text"
              name="firstName"
              value={profileStore.formData.firstName}
              onChange={handleChangeInput("firstName")}
              required
            />
          </label>
          <label>
            Last name:
            <input
              type="text"
              name="lastName"
              value={profileStore.formData.lastName}
              onChange={handleChangeInput("lastName")}
              required
            />
          </label>
          <label>
            E-Mail:
            <input
              type="email"
              name="email"
              value={profileStore.formData.email}
              onChange={handleChangeInput("email")}
            />
          </label>
          <label>
            Phone number:
            <input
              type="text"
              name="phoneNumber"
              value={profileStore.formData.phoneNumber}
              onChange={handleChangeInput("phoneNumber")}
            />
          </label>
          <label>
            LinkedIn:
            <input
              type="text"
              name="linkedIn"
              value={profileStore.formData.linkedIn}
              onChange={handleChangeInput("linkedIn")}
            />
          </label>
          <div className="dropdown">
            <label>
              Degree programme:
              <Dropdown
                name="degreeProgramme"
                value={profileStore.formData.degreeProgramme}
                options={degreeProgrammes}
                onChange={(e) => handleChangeDropdown("degreeProgramme", e)}
                required
              />
            </label>
          </div>
          <div className="dropdown">
            <label>
              University degree:
              <Dropdown
                name="universityDegree"
                value={profileStore.formData.universityDegree}
                options={universityDegrees}
                onChange={(e) => handleChangeDropdown("universityDegree", e)}
                required
              />
            </label>
          </div>
          <label>
            Year of graduation:
            <input
              type="text"
              name="yearOfGraduation"
              value={profileStore.formData.yearOfGraduation}
              onChange={handleChangeInput("yearOfGraduation")}
              required
            />
          </label>
          <label>
            Organization:
            <input
              type="text"
              name="organization"
              value={profileStore.formData.organization}
              onChange={handleChangeInput("organization")}
            />
          </label>
          <label>
            Position:
            <input
              type="text"
              name="position"
              value={profileStore.formData.position}
              onChange={handleChangeInput("position")}
            />
          </label>
          <div className="dropdown">
            <label>
              What role do you want to have in the Fdiba Alumni Network?
              <MultiSelect
                name="rolesInFdibaAlumni"
                value={profileStore.formData.rolesInFdibaAlumni}
                options={rolesInFdibaAlumni}
                onChange={(e) => handleChangeDropdown("rolesInFdibaAlumni", e)}
                multiple
              />
            </label>
          </div>

          <button type="submit" className="save-button">
            Save the changes
          </button>
        </form>
      </div>
    </>
  );
});

export default EditProfilePage;
