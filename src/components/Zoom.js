import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Zoom = () => {
  return (
    <section className="bg-slate-900 ">
      <div className="flex flex-col h-screen max-w-[1250px] mx-auto justify-center items-center gap-6 py-10 md:py-0 md:flex-row">
        <div
          data-aos="zoom-in-up"
          data-aos-delay="100"
          data-aos-offset="0"
          className="relative border-4 border-white rounded-xl w-full h-[40rem] overflow-hidden"
        >
          <StaticImage
            className=" w-full h-full object-cover hover:scale-110 transition duration-300 ease-in-out"
            src="../images/illustration-flowing-conversation.svg"
            alt="working"
          />
        </div>

        <div
          data-aos="zoom-in-up"
          data-aos-delay="200"
          data-aos-offset="0"
          className="relative border-4 border-white rounded-xl w-full h-[40rem] overflow-hidden"
        >
          <StaticImage
            className=" w-full h-full object-cover hover:scale-110 transition duration-300 ease-in-out"
            src="../images/illustration-grow-together.svg"
            alt="people"
          />
        </div>

        <div
          data-aos="zoom-in-up"
          data-aos-delay="300"
          data-aos-offset="0"
          className="relative border-4 border-white rounded-xl w-full h-[40rem] overflow-hidden"
        >
          <StaticImage
            className=" w-full h-full object-cover hover:scale-110 transition duration-300 ease-in-out"
            src="../images/illustration-your-users.svg"
            alt="computer"
          />
        </div>
      </div>
    </section>
  );
};

export default Zoom;
