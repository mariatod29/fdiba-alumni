import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { Carousel } from "primereact/carousel";

const Dashboard = () => {
  const [userName, setUserName] = useState("User");
  const [recentUpdates, setRecentUpdates] = useState([]);
  const [quickStats, setQuickStats] = useState({
    profileVisits: 0,
    messages: 0,
    notifications: 0,
  });

  useEffect(() => {
    // Fetch user data, recent updates, and quick stats from the backend
    const fetchData = async () => {
      try {
        const userResponse = await fetch("http://localhost:5000/api/user");
        const userData = await userResponse.json();
        setUserName(userData.name);

        const updatesResponse = await fetch(
          "http://localhost:5000/api/updates"
        );
        const updatesData = await updatesResponse.json();
        setRecentUpdates(updatesData);

        const statsResponse = await fetch("http://localhost:5000/api/stats");
        const statsData = await statsResponse.json();
        setQuickStats(statsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const images = [
    { url: "/fdiba-event.jpg", alt: "Event 1" },
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
        <h1>Welcome, {userName}!</h1>
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
      <main className="dashboard-main">
        <section className="recent-updates">
          <h2>Recent Updates</h2>
          <ul>
            {recentUpdates.map((update, index) => (
              <li key={index}>{update}</li>
            ))}
          </ul>
        </section>
        <section className="quick-stats">
          <h2>Quick Stats</h2>
          <ul>
            <li>Profile Visits: {quickStats.profileVisits}</li>
            <li>Messages: {quickStats.messages}</li>
            <li>Notifications: {quickStats.notifications}</li>
          </ul>
        </section>
      </main>
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
