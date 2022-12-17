import React from "react";

const Funny = () => {
  return (
    <section className=" flex flex-col gap-6 justify-center items-center h-screen bg-slate-900">
      <h1
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        className="text-2xl font-bold text-white sm:text-6xl"
      >
        Must Watch!
      </h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Uo3cL4nrGOk"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </section>
  );
};

export default Funny;
