import React from "react";
import { observer } from "mobx-react-lite";
import contactStore from "../../stores/ContactStore";
import "./ContactPage.css";

const ContactPage = observer(() => {
  const { contactDetails } = contactStore;

  return (
    <div className="contact-page-container">
      <div className="contact-person-container">
        <img src="/webpage-1.png" alt="contact-photo" />
        <h1>Contact</h1>
        <div className="contact-person-info">
          <p>{contactDetails.university}</p>
          <p>{contactDetails.department}</p>
          <p>{contactDetails.address}</p>
          <p>Phone: {contactDetails.phone}</p>
          <p>Email: {contactDetails.email}</p>
        </div>
      </div>
      <h3>Contact Person</h3>
      <div className="contact-person-container">
        <img src="/DStancheva.jpg" alt="DStancheva" />
        <div className="contact-person-info">
          <p>{contactDetails.contactPerson.name}</p>
          <p>{contactDetails.contactPerson.title}</p>
          <p>Tel.: {contactDetails.contactPerson.phone}</p>
          <p>{contactDetails.contactPerson.email}</p>
        </div>
      </div>
    </div>
  );
});

export default ContactPage;
