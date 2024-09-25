import { makeAutoObservable } from "mobx";
import axios from "axios";

class JobStore {
  jobs = [];
  formData = {
    title: "",
    description: "",
    company: "",
    type: "",
    experienceLevel: "",
  };

  constructor() {
    makeAutoObservable(this);
  }

  async fetchJobs() {
    try {
      const response = await axios.get("http://localhost:5237/api/jobs");
      this.jobs = response.data;
    } catch (error) {
      console.error("Failed to fetch jobs:", error);
    }
  }

  setFormData(fieldName, value) {
    this.formData[fieldName] = value;
  }

  async createJob() {
    try {
      const response = await axios.post(
        "http://localhost:5237/api/jobs",
        this.formData
      );
      this.jobs = response.data;
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Failed to create job:", error);
    }
  }
}

const jobStore = new JobStore();
export default jobStore;
