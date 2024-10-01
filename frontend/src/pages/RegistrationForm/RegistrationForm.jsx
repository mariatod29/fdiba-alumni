import React from "react";
import { observer } from "mobx-react";
import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";
import { useNavigate } from "react-router-dom";
import registrationStore from "../../stores/RegistrationStore";
import "./RegistrationForm.css";
import { universityDegrees } from "../../constants/universityDegrees";
import { rolesInFdibaAlumni } from "../../constants/rolesInFdibaAlumni";
import { degreeProgrammes } from "../../constants/degreeProgrammes";
import HomePageHeader from "../HomePage/HomePageHeader/HomePageHeader";

const RegistrationForm = observer(() => {
  const navigate = useNavigate();

  const handleChangeInput = (fieldName) => (e) => {
    registrationStore.setFormData(fieldName, e.target.value);
  };

  const handleChangeDropdown = (fieldName, selectedOptions) => {
    const values = Array.isArray(selectedOptions)
      ? selectedOptions.map((option) => option.value)
      : selectedOptions.value;
    registrationStore.setFormData(fieldName, values);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await registrationStore.registerUser();
    if (success) {
      navigate("/dashboard");
    }
  };

  return (
    <>
      <HomePageHeader />
      <div className="form-container">
        <h2>Welcome to FDIBA Alumni!</h2>
        <form onSubmit={handleSubmit}>
          <label>
            First name:
            <input
              type="text"
              value={registrationStore.formData.firstName}
              onChange={handleChangeInput("firstName")}
              required
            />
          </label>
          <label>
            Last name:
            <input
              type="text"
              value={registrationStore.formData.lastName}
              onChange={handleChangeInput("lastName")}
              required
            />
          </label>
          <label>
            E-Mail:
            <input
              type="email"
              value={registrationStore.formData.email}
              onChange={handleChangeInput("email")}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={registrationStore.formData.password}
              onChange={handleChangeInput("password")}
              required
            />
          </label>
          <label>
            Phone number:
            <input
              type="text"
              value={registrationStore.formData.phoneNumber}
              onChange={handleChangeInput("phoneNumber")}
            />
          </label>
          <label>
            LinkedIn:
            <input
              type="text"
              value={registrationStore.formData.linkedIn}
              onChange={handleChangeInput("linkedIn")}
            />
          </label>
          <div className="dropdown">
            <label>
              Degree programme:
              <Dropdown
                value={registrationStore.formData.degreeProgramme}
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
                value={registrationStore.formData.universityDegree}
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
              value={registrationStore.formData.yearOfGraduation}
              onChange={handleChangeInput("yearOfGraduation")}
              required
            />
          </label>
          <label>
            Organization:
            <input
              type="text"
              value={registrationStore.formData.organization}
              onChange={handleChangeInput("organization")}
            />
          </label>
          <label>
            Position:
            <input
              type="text"
              value={registrationStore.formData.position}
              onChange={handleChangeInput("position")}
            />
          </label>
          <div className="dropdown">
            <label>
              What role do you want to have in the Fdiba Alumni Network?
              <MultiSelect
                value={registrationStore.formData.roleInFdibaAlumniSerialized}
                options={rolesInFdibaAlumni}
                onChange={(e) =>
                  handleChangeDropdown("roleInFdibaAlumniSerialized", e)
                }
                optionLabel="label"
                optionValue="value"
                placeholder="Select roles"
                display="chip"
              />
            </label>
          </div>
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
      </div>
    </>
  );
});

export default RegistrationForm;
