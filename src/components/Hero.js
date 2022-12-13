import React from "react";
import Header from "../components/Header";
import Background from "../images/hommeTravail.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen">
      <Header />
      <img
        src={Background}
        alt="background workers"
        className="object-cover w-full h-full"
      />
    </section>
  );
};

export default Hero;
