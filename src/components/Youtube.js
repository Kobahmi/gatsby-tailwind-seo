import React from "react";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const Youtube = () => {
  return (
    <section className="flex flex-col justify-center gap-6 text-white bg-slate-900 h-screen">
      <h1 className="text-lg font-bold text-center sm:text-4xl ">
        MUST WATCH!
      </h1>
      <div className="w-[680px] mx-auto">
        <LiteYouTubeEmbed
          poster="maxresdefault"
          id="Uo3cL4nrGOk"
          title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
        />
      </div>
    </section>
  );
};

export default Youtube;
