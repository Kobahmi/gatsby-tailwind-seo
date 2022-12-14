import React from "react";
import Image1 from "../images/illustration-flowing-conversation.svg";
import Image2 from "../images/illustration-grow-together.svg";
import Image3 from "../images/illustration-your-users.svg";

const Fade = () => {
  return (
    <section className="flex flex-col  items-center bg-slate-100 p-10">
      <div className="flex h-screen w-full">
        <h1 className="flex flex-col gap-6 items-center justify-center w-1/2">
          <span
            data-aos="fade-up"
            className="text-center text-lg font-bold md:text-xl lg:text-4xl"
          >
            {" "}
            10K+ Développeurs déjà convaincus
          </span>
          <span
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            className="max-w-sm text-md lg:text-lg"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis, et?
          </span>
        </h1>
        <img
          data-aos="fade-left"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          src={Image1}
          className="w-1/2 h-full object-cover"
          alt="tree loving people"
        />
      </div>

      <div className="flex h-screen w-full">
        <h1 className="flex flex-col gap-6 items-center justify-center w-1/2">
          <span
            data-aos="fade-up"
            className="text-center text-lg font-bold md:text-xl lg:text-4xl"
          >
            {" "}
            Qu'attendez-vous?
          </span>
          <span
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            className="max-w-sm text-md lg:text-lg"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis, et?
          </span>
        </h1>
        <img
          data-aos="fade-left"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          src={Image2}
          className="w-1/2 h-full object-cover"
          alt="tree loving people"
        />
      </div>

      <div className="flex h-screen w-full">
        <h1 className="flex flex-col gap-6 items-center justify-center w-1/2">
          <span
            data-aos="fade-up"
            className="text-center text-lg font-bold md:text-xl lg:text-4xl"
          >
            {" "}
            Rentrons en contact!
          </span>
          <span
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            className="max-w-sm text-md lg:text-lg"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis, et?
          </span>
        </h1>
        <img
          data-aos="fade-left"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          src={Image3}
          className="w-1/2 h-full object-cover"
          alt="tree loving people"
        />
      </div>
    </section>
  );
};

export default Fade;