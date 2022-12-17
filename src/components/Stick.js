import React from "react";

const Stick = () => {
  return (
    <section className="flex flex-col justify-around items-center bg-slate-900 h-screen text-white">
      <h1
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="100"
        data-aos-offset="0"
        className="text-xl font-extrabold sm:text-6xl"
      >
        Anchor effect
      </h1>
      <h2
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="200"
        data-aos-offset="0"
        data-aos-duration="1000"
        className="text-lg font-bold sm:text-3xl"
      >
        Scroll down!
      </h2>
    </section>
  );
};

export default Stick;
