import React from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import HomePageHeader from "./HomePageHeader/HomePageHeader";
import HomePageFooter from "./HomePageFooter/HomePageFooter";
import HomePage from "./HomePage/HomePage";

export default function HomePageWrapper() {
  return (
    <>
      <HomePageHeader />
      <HomePage />
      <HomePageFooter />
    </>
  );
}
