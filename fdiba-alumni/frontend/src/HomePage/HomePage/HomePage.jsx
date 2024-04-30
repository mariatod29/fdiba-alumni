import React from "react";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";
import "./HomePage.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export default function HomePage() {
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
    <div className="mainContainer">
      <h1>Welcome to the Alumni Network!</h1>
      <p>
        This network helps you stay connected with fellow alumni and leverage
        professional opportunities.
      </p>
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
