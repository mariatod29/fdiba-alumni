import React from "react";
import "./App.css";
import RegistrationForm from "./RegistrationForm/RegistrationForm";

function App() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/fdiba-background.png"
          })`,
        }}
      ></div>
      <RegistrationForm />
    </>
  );
}

export default App;
