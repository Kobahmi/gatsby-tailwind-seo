import React from "react";
import Image1 from "../images/illustration-flowing-conversation.svg";
import Image2 from "../images/illustration-grow-together.svg";
import Image3 from "../images/illustration-your-users.svg";

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
          <button className="text-lg font-bold whitespace-nowrap hover:bg-slate-100 rounded-full text-black p-5 bg-white z-10 absolute bottom-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Build & Customize
          </button>
          <img
            className=" w-full h-full object-cover hover:scale-110 transition duration-300 ease-in-out"
            src={Image1}
            alt="working"
          />
        </div>

        <div
          data-aos="zoom-in-up"
          data-aos-delay="200"
          data-aos-offset="0"
          className="relative border-4 border-white rounded-xl w-full h-[40rem] overflow-hidden"
        >
          <button className="text-lg font-bold hover:bg-slate-100 rounded-full text-black p-5 bg-white z-10 absolute bottom-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Shop Pre-Owned
          </button>
          <img
            className=" w-full h-full object-cover hover:scale-110 transition duration-300 ease-in-out"
            src={Image2}
            alt="people"
          />
        </div>

        <div
          data-aos="zoom-in-up"
          data-aos-delay="300"
          data-aos-offset="0"
          className="relative border-4 border-white rounded-xl w-full h-[40rem] overflow-hidden"
        >
          <button className="text-lg font-bold hover:bg-slate-100 rounded-full text-black p-5 bg-white z-10 absolute bottom-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            100% Online
          </button>
          <img
            className=" w-full h-full object-cover hover:scale-110 transition duration-300 ease-in-out"
            src={Image3}
            alt="computer"
          />
        </div>
      </div>
    </section>
  );
};

export default Zoom;
