import React from "react";

const Sticky = () => {
  return (
    <section className="bg-slate-900 py-10">
      <div
        data-aos="fade-right"
        data-aos-anchor=".trigger-left"
        data-aos-anchor-placement="top-center"
        className="fixed flex flex-col gap-2 justify-center items-center text-center z-20 top-1/2 w-96 h-96 bg-white  p-10"
      >
        <p className="text-2xl font-bold">Anchor!</p>
        <p className="text-lg ">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>
      </div>

      <div className="flex justify-start max-w-[1000px] mx-auto">
        <hr
          data-aos="slide-up"
          className="rounded-xl bg-red-400 h-96 mb-10 w-1/3"
        ></hr>
      </div>

      <div className="flex justify-center max-w-[1000px] mx-auto">
        <hr
          data-aos="flip-left"
          className="rounded-xl bg-sky-400 h-96 mb-10 w-1/3"
        ></hr>
      </div>

      <div className="flex justify-end max-w-[1000px] mx-auto">
        <hr
          data-aos="fade-up"
          className="rounded-xl bg-green-400 h-96 mb-10 w-1/3"
        ></hr>
      </div>

      <div className="flex justify-center max-w-[1000px] mx-auto">
        <hr
          data-aos="zoom-in"
          className="rounded-xl bg-orange-400 h-96 mb-10 w-1/3"
        ></hr>
      </div>

      <div className="flex justify-start max-w-[1000px] mx-auto">
        <hr
          data-aos="flip-up"
          className="rounded-xl bg-yellow-400 h-96 mb-10 w-1/3"
        ></hr>
      </div>

      <div className="flex justify-start max-w-[1000px] mx-auto">
        <hr
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="rounded-xl bg-purple-400 h-96 mb-10 w-full"
        ></hr>
      </div>

      <div className="trigger-left flex justify-end max-w-[1000px] mx-auto">
        <hr
          data-aos="fade-up"
          className="rounded-xl bg-green-400 h-96 mb-10 w-2/3"
        ></hr>
      </div>

      <div className="flex justify-end max-w-[1000px] mx-auto">
        <hr
          data-aos="flip-down"
          className="rounded-xl bg-red-400 h-96 mb-10 w-2/3"
        ></hr>
      </div>

      <div className="flex justify-end max-w-[1000px] mx-auto">
        <hr
          data-aos="zoom-in"
          className="rounded-xl bg-sky-400 h-96 mb-10 w-2/3"
        ></hr>
      </div>
    </section>
  );
};

export default Sticky;
