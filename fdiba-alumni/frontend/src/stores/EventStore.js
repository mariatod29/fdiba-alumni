import { makeAutoObservable } from "mobx";
import axios from "axios";

class EventStore {
  events = [];
  formData = {
    title: "",
    description: "",
    date: "",
    location: "",
  };

  constructor() {
    makeAutoObservable(this);
  }

  async fetchEvents() {
    try {
      const response = await axios.get("http://localhost:5237/api/events");
      this.events = response.data;
    } catch (error) {
      console.error("Failed to fetch events:", error);
    }
  }

  setFormData(fieldName, value) {
    this.formData[fieldName] = value;
  }

  async createEvent() {
    try {
      const response = await axios.post(
        "http://localhost:5237/api/events",
        this.formData
      );
      this.events.push(response.data);
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Failed to create event:", error);
    }
  }
}

const eventStore = new EventStore();
export default eventStore;
