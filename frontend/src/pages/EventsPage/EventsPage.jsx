import React from "react";
import { observer } from "mobx-react";
import eventStore from "../../stores/EventStore";
import "./EventsPage.css";
import HomePageHeader from "../HomePage/HomePageHeader/HomePageHeader";

const EventsPage = observer(() => {
  const handleInputChange = (fieldName) => (e) => {
    eventStore.setFormData(fieldName, e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await eventStore.createEvent();
  };

  return (
    <>
      <HomePageHeader />
      <div className="events-page">
        <h2>Create new event</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Title of the event:
            <input
              type="text"
              name="title"
              value={eventStore.formData.title}
              onChange={handleInputChange("title")}
              required
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={eventStore.formData.description}
              onChange={handleInputChange("description")}
              required
            />
          </label>
          <label>
            Date of the location:
            <input
              type="date"
              name="date"
              value={eventStore.formData.date}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Location:
            <input
              type="text"
              name="location"
              value={eventStore.formData.location}
              onChange={handleInputChange("location")}
              required
            />
          </label>
          <button type="submit" className="create-button">
            Create Event
          </button>
        </form>
      </div>
    </>
  );
});

export default EventsPage;
