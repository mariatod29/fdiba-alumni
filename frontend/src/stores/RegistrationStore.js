import { makeAutoObservable } from "mobx";
import axios from "axios";

class RegistrationStore {
  formData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    linkedIn: "",
    degreeProgramme: "",
    universityDegree: "",
    yearOfGraduation: "",
    organization: "",
    position: "",
    RoleInFdibaAlumniSerialized: [],
    user: {},
  };

  constructor() {
    makeAutoObservable(this);
  }

  setFormData(fieldName, value) {
    this.formData[fieldName] = value;
  }

  async registerUser() {
    const user = {
      Email: this.formData.email,
      Password: this.formData.password,
      Profile: {
        FirstName: this.formData.firstName,
        LastName: this.formData.lastName,
        Email: this.formData.email,
        DegreeProgramme: this.formData.degreeProgramme,
        UniversityDegree: this.formData.universityDegree,
        YearOfGraduation: this.formData.yearOfGraduation,
        Phone: this.formData.phoneNumber || "",
        LinkedIn: this.formData.linkedIn || "",
        Organization: this.formData.organization || "",
        Position: this.formData.position || "",
        RoleInFdibaAlumniSerialized:
          this.formData.RoleInFdibaAlumniSerialized.join(","), // Serialize the array to a string
      },
    };

    try {
      const response = await axios.post(
        `http://localhost:5237/api/user/register`,
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Registration successful:", response.data);
      window.location.href = "/dashboard";
    } catch (error) {
      console.error(
        "Registration failed:",
        error.response?.data || error.message
      );
    }
  }
}

const registrationStore = new RegistrationStore();
export default registrationStore;
