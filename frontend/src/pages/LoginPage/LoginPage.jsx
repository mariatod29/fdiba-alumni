import React from "react";
import { observer } from "mobx-react";
import loginStore from "../../stores/LoginStore";
import "./LoginPage.css";
import HomePageHeader from "../HomePage/HomePageHeader/HomePageHeader";

const LoginPage = observer(() => {
  const handleChangeInput = (fieldName) => (e) => {
    loginStore.setFormData(fieldName, e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginStore.login();
  };

  return (
    <>
      <HomePageHeader />
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="text"
              value={loginStore.formData.email}
              onChange={handleChangeInput("email")}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={loginStore.formData.password}
              onChange={handleChangeInput("password")}
              required
            />
          </label>
          {loginStore.error && (
            <div className="error-message">{loginStore.error}</div>
          )}
          <button type="submit" disabled={loginStore.loading}>
            {loginStore.loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className="login-links">
          <a href="/forgot-password">Forgot Password?</a>
          <a href="/register">Register</a>
        </div>
      </div>
    </>
  );
});

export default LoginPage;
