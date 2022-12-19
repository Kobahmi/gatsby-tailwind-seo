import React from "react";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const Youtube = () => {
  return (
    <section className="flex flex-col justify-center gap-6 text-white bg-slate-900 h-screen">
      <h1
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        className="text-lg font-bold text-center sm:text-4xl "
      >
        MUST WATCH!
      </h1>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-in-back"
        data-aos-delay="200"
        className="w-[680px] mx-auto"
      >
        <LiteYouTubeEmbed
          poster="maxresdefault"
          id="Uo3cL4nrGOk"
          title="Funny"
          webp="true"
          cookie="true"
        />
      </div>
    </section>
  );
};

export default Youtube;
