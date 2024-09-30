import { makeAutoObservable } from "mobx";
import axios from "axios";

class ProfileStore {
  profile = null;
  formData = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    linkedIn: "",
    degreeProgramme: null,
    universityDegree: null,
    yearOfGraduation: "",
    organization: "",
    position: "",
    rolesInFdibaAlumni: [],
  };
  constructor() {
    makeAutoObservable(this);
  }

  async fetchProfile(email) {
    try {
      const response = await axios.get(
        `http://localhost:5237/api/profile/${email}`
      );
      this.profile = response.data;
      this.setFormDataFromProfile(this.profile);
    } catch (error) {
      console.error("Failed to fetch profile:", error);
    }
  }

  setFormDataFromProfile(profile) {
    this.formData.firstName = profile.firstName || "";
    this.formData.lastName = profile.lastName || "";
    this.formData.email = profile.email || "";
    this.formData.phoneNumber = profile.phoneNumber;
    this.formData.linkedIn = profile.linkedIn || "";
    this.formData.degreeProgramme = profile.degreeProgramme || null;
    this.formData.universityDegree = profile.universityDegree || null;
    this.formData.yearOfGraduation = profile.yearOfGraduation || "";
    this.formData.organization = profile.organization || "";
    this.formData.position = profile.position || "";
    this.formData.rolesInFdibaAlumni = profile.rolesInFdibaAlumni || [];
  }

  setFormData(fieldName, value) {
    this.formData[fieldName] = value;
  }

  async updateProfile(email) {
    email = this.formData.email;
    try {
      await axios.put(`http://localhost:5237/api/profile/${email}`, this.formData);
      await this.fetchProfile(email);
    } catch (error) {
      console.error("Failed to update profile", error);
    }
  }
}

const profileStore = new ProfileStore();
export default profileStore;
