import React from "react";
import Lottie from "lottie-react";
import Sushi from "../images/wizard-sushi.json";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const Youtube = () => {
  return (
    <section className="flex flex-col justify-center gap-6 text-white bg-slate-900 h-screen">
      <div
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        className="w-[400px] mx-auto"
      >
        <Lottie animationData={Sushi} />
      </div>
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
          poster="hqdefault"
          id="Uo3cL4nrGOk"
          title="Funny"
          adNetwork={true}
          webp="true"
          noCookie={true}
        />
      </div>
    </section>
  );
};

export default Youtube;
