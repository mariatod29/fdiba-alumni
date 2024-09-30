import React from "react";
import { observer } from "mobx-react-lite";
import "./AboutUsPage.css";

const AboutUsPage = observer(() => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>
        Welcome to the FDIBA Alumni Network! Our mission is to foster a strong
        community of FDIBA graduates who can support each other in their
        professional and personal growth. We aim to provide resources, organize
        events, and create opportunities for our members to connect and
        collaborate.
      </p>
      <p>
        The FDIBA Alumni Network was established to maintain a lifelong
        relationship between the university and its alumni. We encourage all
        graduates to stay involved and contribute to the continuous development
        of the FDIBA community.
      </p>
      <p>
        Whether you're looking to reconnect with old friends, find new job
        opportunities, or give back to the university, the FDIBA Alumni Network
        is here to help you achieve your goals.
      </p>
      <h2>Our Values</h2>
      <h3>THINKING AND ACTING FOR THE FUTURE</h3>
      <p>
        FDIBA supports innovative thinking and anticipates upcoming trends.
        Entrepreneurial thinking as well as founding ideas form the present
        culture and atmosphere.
      </p>
    </div>
  );
});

export default AboutUsPage;
