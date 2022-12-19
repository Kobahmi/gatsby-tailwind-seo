import React from "react";
import "@justinribeiro/lite-youtube";

const Youtube = () => {
  return (
    <section className="flex flex-col justify-center gap-6 text-white bg-slate-900 h-screen">
      <h1 className="text-lg font-bold text-center sm:text-4xl ">MUST WATCH</h1>
      <div className="w-[680px] mx-auto">
        <lite-youtube
          posterquality="maxresdefault"
          videoid="Uo3cL4nrGOk"
        ></lite-youtube>
      </div>
    </section>
  );
};

export default Youtube;
