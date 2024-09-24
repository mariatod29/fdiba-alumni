import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { Carousel } from "primereact/carousel";
import profileStore from "../../stores/ProfileStore";

const Dashboard = () => {
  const [username, setUsername] = useState("User");

  useEffect(() => {
    const email = "201220029@fdiba.tu-sofia.bg";
    profileStore.fetchProfile(email);
    setUsername(profileStore.formData.firstName);
  }, []);


  const images = [
    { url: "/fdiba-event-1.png", alt: "Event 1" },
    { url: "/fdiba-event-2.jpg", alt: "Event 2" },
    { url: "/fdiba-event-3.jpg", alt: "Event 3" },
    { url: "/fdiba-event-4.jpg", alt: "Event 4" },
  ];

  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "768px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "560px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const imageTemplate = (image) => {
    return <img src={image.url} alt={image.alt} />;
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome, {username}!</h1>
      </header>
      <nav className="dashboard-nav">
        <ul>
          <li>
            <a href="/profile">Profile</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/events">Events</a>
          </li>
          <li>
            <a href="/settings">Settings</a>
          </li>
        </ul>
      </nav>
      <Carousel
        value={images}
        numVisible={1}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        className="custom-carousel"
        circular
        autoplayInterval={5000}
        itemTemplate={imageTemplate}
      />
      <aside className="dashboard-sidebar">
        <h2>Quick Links</h2>
        <ul>
          <li>
            <a href="/update-profile">Update Profile</a>
          </li>
          <li>
            <a href="/add-project">Add New Project</a>
          </li>
          <li>
            <a href="/search-alumni">Search for Alumni</a>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Dashboard;
