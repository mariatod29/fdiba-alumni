import { makeAutoObservable } from "mobx";

class LoginStore {
  formData = {
    email: "",
    password: "",
  };
  error = "";
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setFormData(fieldName, value) {
    this.formData[fieldName] = value;
  }

  async login() {
    this.loading = true;
    this.error = "";

    try {
      const response = await fetch("http://localhost:5237/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.formData),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      window.location.href = "/dashboard";
    } catch (error) {
      this.error = "Invalid username or password";
    } finally {
      this.loading = false;
    }
  }
}

const loginStore = new LoginStore();
export default loginStore;
