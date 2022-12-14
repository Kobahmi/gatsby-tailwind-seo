import React from "react";
import { useEffect } from "react";
import Rellax from "rellax";
import Circle from "../images/circle.svg";
import { StaticImage } from "gatsby-plugin-image";

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
    <section className="relative overflow-hidden text-white bg-slate-900">
      <img
        className="absolute top-[10%] left-[-15%] w-[100rem] h-[100rem]"
        src={Circle}
        alt="circle"
      />
      <img
        className="absolute animate-image top-[15%] left-[20%]  w-[80rem] h-[80rem]"
        src={Circle}
        alt="circle"
      />

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
          <p className="animate z-20 text-3xl font-bold md:text-6xl">
            Amazing.
          </p>
        </div>
        <div className="flex justify-center mx-auto w-full max-w-[1000px]">
          <p className="z-30 text-sky-200 text-3xl font-bold md:text-8xl">
            Why so much snow in Canada?
          </p>
        </div>

        <div className="flex justify-end mx-auto w-full max-w-[1000px]">
          <p className="animate z-30 text-red-400 text-3xl font-bold md:text-8xl">
            I shovel every day
          </p>
        </div>
        <div className="flex justify-start mx-auto w-full max-w-[1000px]">
          <p className="text-3xl z-20 font-bold md:text-6xl">
            Back pain at 30 years old
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center h-screen px-10">
        <div className=" border-white border-none  w-full  h-[30rem] overflow-hidden">
          <StaticImage
            className="animate-image overflow-clip w-full h-[140%] object-cover "
            src="../images/hommeTravail.webp"
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
        className="relative flex flex-col h-[30vh] items-center"
      >
        {" "}
        <p className="font-bold text-2xl sm:text-6xl">
          Look at the images while scrolling
        </p>
      </div>

      <div className="flex flex-col gap-10 pb-16">
        <div className="flex justify-start items-center  px-10">
          <div className=" border-white border-none  w-1/2  h-[30rem] overflow-hidden">
            <StaticImage
              className="animate-image overflow-clip w-full h-[140%] object-cover "
              src="../images/hommeTravail.webp"
              alt="travail"
            />
          </div>
        </div>

        <div className="flex justify-end items-center  px-10">
          <div className=" border-white border-none  w-1/2  h-[30rem] overflow-hidden">
            <StaticImage
              className="animate-image overflow-clip w-full h-[140%] object-cover "
              src="../images/hommeTravail.webp"
              alt="travail"
            />
          </div>
        </div>
        <div className="flex justify-start items-center px-10">
          <div className=" border-white border-none  w-1/2  h-[30rem] overflow-hidden">
            <StaticImage
              className="animate-image overflow-clip w-full h-[140%] object-cover "
              src="../images/hommeTravail.webp"
              alt="travail"
            />
          </div>
        </div>
        <div className="flex justify-end items-center  px-10">
          <div className=" border-white border-none  w-1/2  h-[30rem] overflow-hidden">
            <StaticImage
              className="animate-image overflow-clip w-full h-[140%] object-cover "
              src="../images/hommeTravail.webp"
              alt="travail"
            />
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex justify-center items-center  px-10"
        >
          <div className=" border-white border-none  w-full  h-[30rem] overflow-hidden">
            <StaticImage
              className="animate-image overflow-clip w-full h-[140%] object-cover "
              src="../images/hommeTravail.webp"
              alt="travail"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Moving;
