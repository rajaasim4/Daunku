import React from "react";
import Footer from "../Components/Footer/Footer";
import BestSeller from "../Layout/BestSeller/BestSeller";
import Care from "../Layout/Care/Care";
import Hero from "../Layout/Hero/Hero";
import Reference from "../Layout/Reference/Reference";
import Service from "../Layout/Service/Service";
const Home = () => {
  return (
    <>
      <Hero />
      <Service />
      <BestSeller />
      <Reference />
      <Care />
      <Footer />
    </>
  );
};

export default Home;
