import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen">
      <div className="absolute z-30 flex flex-col gap-3  text-center top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 text-white">
        <h1
          data-aos="fade-up"
          className="text-xl  font-bold whitespace-nowrap md:text-4xl"
        >
          Boostez votre SEO
        </h1>
        <p
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          className="text-lg font-bold"
        >
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit..."
        </p>
      </div>
      <div className="z-30 absolute text-4xl font-bold bottom-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-slate-200">
        <p
          data-aos="fade-in"
          data-aos-offset="0"
          data-aos-easing="ease-in-back"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          Explorez
        </p>
      </div>
      <div className="absolute z-20 min-h-[640px] h-full w-full bg-slate-900 bg-opacity-50"></div>
      <StaticImage
        src="../images/hommeTravail.webp"
        alt="background workers"
        className="absolute z-10 object-cover w-full h-full"
      />
    </section>
  );
};

export default Hero;
