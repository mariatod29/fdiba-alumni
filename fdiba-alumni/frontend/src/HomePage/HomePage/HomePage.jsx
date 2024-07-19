import React from "react";
import { Button } from "primereact/button";
import "./HomePage.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export default function HomePage() {
  return (
    <div className="mainContainer">
      <div className="headline">
        <h1>Welcome to the FDIBA Alumni Network!</h1>
        <p className="subheadline">
          This network helps you stay connected with fellow alumni and leverage
          professional opportunities.
        </p>
      </div>

      <div className="buttons">
        <Button
          label="Register Now"
          className="registerNowButton"
          onClick={() => (window.location.href = "/register")}
        />
        <Button
          label="Login"
          className="loginButton"
          onClick={() => (window.location.href = "/login")}
        />
      </div>
    </div>
  );
}
