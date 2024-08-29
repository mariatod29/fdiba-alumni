import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    linkedIn: "",
    degreeProgramme: "",
    universityDegree: "",
    yearOfGraduation: "",
    organization: "",
    position: "",
    roleInFdibaAlumni: [""],
  });

  const degreeProgrammes = [
    { label: "Computer Science (B. Sc.)", value: "Computer Science (B. Sc.)" },
    {
      label: "Mechatronics and information technology (B. Sc.)",
      value: "Mechatronics and information technology (B. Sc.)",
    },
    {
      label: "Business informatics (B. Sc.)",
      value: "Business informatics (B. Sc.)",
    },
    {
      label: "Industrial management (M.A.)",
      value: "Industrial management (M.A.)",
    },
    { label: "Computer Science (M.Sc.)", value: "Computer Science (M.Sc.)" },
    {
      label: "International management (MBA)",
      value: "International management (MBA)",
    },
  ];

  const universityDegrees = [
    { label: "Bachelor", value: "Bachelor" },
    { label: "Master", value: "Master" },
  ];

  const rolesInFdibaAlumni = [
    {
      label: "Become a member of the Alumni Association",
      value: "Become a member of the Alumni Association",
    },
    {
      label: "Participate in the management and organization",
      value: "Participate in the management and organization",
    },
    {
      label: "Just give a few ideas and suggestions",
      value: "Just give a few ideas and suggestions",
    },
    { label: "Only help with contacts", value: "Only help with contacts" },
    {
      label: "Only help with money/material resources",
      value: "Only help with money/material resources",
    },
    { label: "Need interns", value: "Need interns" },
    { label: "Need employees", value: "Need employees" },
    {
      label: "Participate in the learning process",
      value: "Participate in the learning process",
    },
    { label: "Present FDIBA", value: "Present FDIBA" },
    {
      label: "Present my organization/company",
      value: "Present my organization/company",
    },
  ];

  const handleChangeInput = (fieldName) => (e) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
  };

  const handleChangeDropdown = (fieldName, selectedOptions) => {
    const values = Array.isArray(selectedOptions)
      ? selectedOptions.map((option) => option.value)
      : selectedOptions.value;
    setFormData({ ...formData, [fieldName]: values });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/user",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      if (error.response) {
        console.error("Registration failed:", error.response.data);
      } else {
        console.error("Error:", error.message);
      }
    }
  };

  return (
    <>
      <div className="form-container">
        <h2>Welcome to FDIBA Alumni!</h2>
        <form onSubmit={handleSubmit}>
          <label>
            First name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChangeInput("firstName")}
              required
            />
          </label>
          <label>
            Last name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChangeInput("lastName")}
              required
            />
          </label>
          <label>
            E-Mail:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChangeInput("email")}
            />
          </label>
          <label>
            Phone number:
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChangeInput("phoneNumber")}
            />
          </label>
          <label>
            LinkedIn:
            <input
              type="text"
              name="linkedIn"
              value={formData.linkedIn}
              onChange={handleChangeInput("linkedIn")}
            />
          </label>
          <div className="dropdown">
            <label>
              Degree programme:
              <Dropdown
                name="degreeProgramme"
                value={formData.degreeProgramme}
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
                value={formData.universityDegree}
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
              value={formData.yearOfGraduation}
              onChange={handleChangeInput("yearOfGraduation")}
              required
            />
          </label>
          <label>
            Organization:
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChangeInput("organization")}
            />
          </label>
          <label>
            Position:
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChangeInput("position")}
            />
          </label>
          <div className="dropdown">
            <label>
              What role do you want to have in the Fdiba Alumni Network?
              <MultiSelect
                name="roleInFdibaAlumni"
                value={formData.roleInFdibaAlumni}
                options={rolesInFdibaAlumni}
                onChange={(e) => handleChangeDropdown("roleInFdibaAlumni", e)}
                multiple
              />
            </label>
          </div>

          <div type="submit" className="register-button">
            Register
          </div>
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;
