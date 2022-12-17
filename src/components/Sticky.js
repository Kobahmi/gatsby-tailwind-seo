import React from "react";

const Sticky = () => {
  return (
    <section className="bg-slate-900 py-10 overflow-x-hidden">
      <div
        data-aos="slide-right"
        data-aos-anchor=".trigger-left"
        data-aos-anchor-placement="top-center"
        className="fixed flex flex-col gap-2 justify-center items-center text-center z-20 top-1/2 w-56 h-56 bg-white p-10 sm:w-96 sm:h-96"
      >
        <p className="text-2xl font-bold">Anchor!</p>
        <p className="text-lg ">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>
      </div>

      <div className="flex justify-start max-w-[1000px] mx-auto">
        <hr
          data-aos="slide-right"
          className="rounded-xl bg-red-400 h-96 mb-10 w-1/3"
        ></hr>
      </div>

      <div className="flex justify-center max-w-[1000px] mx-auto">
        <hr
          data-aos="fade-up"
          className="rounded-xl bg-sky-400 h-96 mb-10 w-1/3"
        ></hr>
      </div>

      <div className="flex justify-end max-w-[1000px] mx-auto">
        <hr
          data-aos="slide-left"
          className="rounded-xl bg-green-400 h-96 mb-10 w-1/3"
        ></hr>
      </div>

      <div className="flex justify-center max-w-[1000px] mx-auto">
        <hr
          data-aos="fade-up"
          className="rounded-xl bg-orange-400 h-96 mb-10 w-1/3"
        ></hr>
      </div>

      <div className="flex justify-start max-w-[1000px] mx-auto">
        <hr
          data-aos="slide-right"
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
          data-aos="fade-left"
          className="rounded-xl bg-green-400 h-96 mb-10 w-2/3"
        ></hr>
      </div>

      <div className="flex justify-end max-w-[1000px] mx-auto">
        <hr
          data-aos="fade-left"
          className="rounded-xl bg-red-400 h-96 mb-10 w-2/3"
        ></hr>
      </div>

      <div className="flex justify-end max-w-[1000px] mx-auto">
        <hr
          data-aos="fade-left"
          className="rounded-xl bg-sky-400 h-96 mb-10 w-2/3"
        ></hr>
      </div>

      <div className="flex max-w-[1250px] w-full gap-4">
        <hr
          data-aos="zoom-in-up"
          data-aos-easing="ease-in-back"
          data-aos-delay="50"
          data-aos-offset="0"
          className="rounded-xl bg-sky-400 h-96 mb-10 w-full"
        />
        <hr
          data-aos="zoom-in-up"
          data-aos-easing="ease-in-back"
          data-aos-delay="100"
          data-aos-offset="0"
          className="rounded-xl bg-red-400 h-96 mb-10 w-full"
        />
        <hr
          data-aos="zoom-in-up"
          data-aos-easing="ease-in-back"
          data-aos-delay="150"
          data-aos-offset="0"
          className="rounded-xl bg-green-400 h-96 mb-10 w-full"
        />
        <hr
          data-aos="zoom-in-up"
          data-aos-easing="ease-in-back"
          data-aos-delay="200"
          data-aos-offset="0"
          className="rounded-xl bg-orange-400 h-96 mb-10 w-full"
        />
        <hr
          data-aos="zoom-in-up"
          data-aos-easing="ease-in-back"
          data-aos-delay="250"
          data-aos-offset="0"
          className="rounded-xl bg-purple-400 h-96 mb-10 w-full"
        />
        <hr
          data-aos="zoom-in-up"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          className="rounded-xl bg-yellow-400 h-96 mb-10 w-full"
        />
      </div>
    </section>
  );
};

export default Sticky;
