import React from "react";
import { useEffect } from "react";
import Rellax from "rellax";
import Image from "../images/hommeTravail.webp";

const Moving = () => {
  useEffect(() => {
    new Rellax(".animate", {
      speed: -2,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
  }, []);

  useEffect(() => {
    new Rellax(".animate-image", {
      speed: -6,
      center: true,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
  }, []);

  return (
    <section className="text-white bg-slate-900">
      <div
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="100"
        data-aos-offset="0"
        data-aos-duration="500"
        className="relative flex flex-col justify-center items-center h-screen"
      >
        {" "}
        <h1 className="font-bold text-2xl sm:text-6xl">Parallax Effect</h1>
        <p className="animate font-bold text-2xl">Explore everything.</p>
      </div>

      <div className="flex flex-col justify-around gap-6 h-screen">
        <div className="flex justify-start mx-auto w-full max-w-[1000px]">
          <p className="animate text-3xl font-bold md:text-6xl">Amazing.</p>
        </div>
        <div className="flex justify-center mx-auto w-full max-w-[1000px]">
          <p className="text-sky-200 text-3xl font-bold md:text-8xl">
            Why so much snow in Canada?
          </p>
        </div>

        <div className="flex justify-end mx-auto w-full max-w-[1000px]">
          <p className="animate text-red-400 text-3xl font-bold md:text-7xl">
            I shovel every day
          </p>
        </div>
        <div className="flex justify-start mx-auto w-full max-w-[1000px]">
          <p className="text-3xl font-bold md:text-6xl">
            Back pain at 30 years old
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center h-screen px-10">
        <div className=" border-white border-none  w-full  h-[30rem] overflow-hidden">
          <img
            className="animate-image overflow-clip w-full h-[140%] object-cover "
            src={Image}
            alt="travail"
          />
        </div>
      </div>

      <div
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="100"
        data-aos-offset="0"
        data-aos-duration="500"
        className="relative flex flex-col h-[50vh] items-center"
      >
        {" "}
        <p className="font-bold text-2xl sm:text-6xl">
          Look at the image while scrolling
        </p>
      </div>
    </section>
  );
};

export default Moving;
