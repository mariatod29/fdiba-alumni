import React from "react";
import { observer } from "mobx-react";
import jobStore from "../../stores/JobStore";
import "./JobsPage.css";

const JobsPage = observer(() => {
  const handleInputChange = (fieldName) => (e) => {
    jobStore.setFormData(fieldName, e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await jobStore.createJob();
  };

  return (
    <div className="jobs-page">
      <h2>Create New Job Opportunity</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Job Title:
          <input
            type="text"
            name="title"
            value={jobStore.formData.title}
            onChange={handleInputChange("title")}
            required
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={jobStore.formData.description}
            onChange={handleInputChange("description")}
            required
          />
        </label>
        <label>
          Company:
          <input
            type="text"
            name="company"
            value={jobStore.formData.company}
            onChange={handleInputChange("company")}
            required
          />
        </label>
        <label>
          Job Type:
          <input
            type="text"
            name="type"
            value={jobStore.formData.type}
            onChange={handleInputChange("type")}
            required
          />
        </label>
        <label>
          Experience Level:
          <input
            type="text"
            name="experienceLevel"
            value={jobStore.formData.experienceLevel}
            onChange={handleInputChange("experienceLevel")}
            required
          />
        </label>
        <button type="submit" className="create-button">
          Create Job
        </button>
      </form>
    </div>
  );
});

export default JobsPage;
