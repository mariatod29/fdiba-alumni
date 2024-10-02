import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { Carousel } from "primereact/carousel";
import profileStore from "../../stores/ProfileStore";
import eventStore from "../../stores/EventStore";
import jobStore from "../../stores/JobStore";
import HomePageHeader from "../HomePage/HomePageHeader/HomePageHeader";

const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const email = "201220029@fdiba.tu-sofia.bg";
    profileStore.fetchProfile(email);

    const fetchEventsData = async () => {
      await eventStore.fetchEvents();
      setEvents(eventStore.events);
    };
    fetchEventsData();

    const fetchJobsData = async () => {
      await jobStore.fetchJobs();
      setJobs(jobStore.jobs);
    };
    fetchJobsData();
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
    <>
      <HomePageHeader />
      <div className="dashboard-container">
        <header className="dashboard-header">
          <h1>Welcome, Maria!</h1>
        </header>
        <nav className="dashboard-nav">
          <ul>
            <li>
              <a href="/profile">Profile</a>
            </li>
            <li>
              <a href="/jobs">Jobs</a>
            </li>
            <li>
              <a href="/events">Events</a>
            </li>
            <li>
              <a href="/edit-profile">Settings</a>
            </li>
          </ul>
        </nav>

        {/* Carousel Section */}
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
        <div className="dashboard-sections">
          {/* Events Section */}
          <section className="dashboard-section">
            <h2>Upcoming Events</h2>
            <ul>
              {events.length > 0 ? (
                events.map((event) => (
                  <li key={event.eventId}>
                    <h3>{event.title}</h3>
                    <p>Description: {event.description}</p>
                    <p>
                      Date:{" "}
                      {event.date
                        ? new Date(event.date).toLocaleDateString()
                        : "To be defined"}
                    </p>
                    <p>Location: {event.location}</p>
                  </li>
                ))
              ) : (
                <p>No events available.</p>
              )}
            </ul>
          </section>
          {/* Jobs Section */}
          <section className="dashboard-section">
            <h2>Job opportunities</h2>
            <ul>
              {jobs.length > 0 ? (
                jobs.map((jobs) => (
                  <li key={jobs.jobId}>
                    <h3>{jobs.title}</h3>
                    <p>Description: {jobs.description}</p>
                    <p>Company: {jobs.company}</p>
                    <p>Job type: {jobs.type}</p>
                    <p>Experience level: {jobs.experienceLevel}</p>
                  </li>
                ))
              ) : (
                <p>No jobs available.</p>
              )}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
