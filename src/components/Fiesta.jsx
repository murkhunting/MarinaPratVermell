import React, { useState, useRef, useEffect } from "react";
import ScrollVelocity from "./ScrollVelocity";

const Fiesta = () => {
  return (
    <section className="flex flex-col py-10 justify-start items-center w-screen h-screen relative overflow-hidden">
      <h2 className="poppins text-black text-3xl text-center">
        Un <b>Gran Barrio</b> conlleva una <b>Gran Responsabilidad</b>, por eso
        te necesitamos <b>Tus ideas</b>.
      </h2>
      <div className="flex flex-col justify-start items-center w-screen p-10 bg-[#FFA7A7]">
        <div className="flex flex-row justify-center items-center w-full py-4 gap-8">
          <div className="flex flex-col items-center w-1/3 p-3 bg-white marker">
            <img
              className=" w-full h-[40vh] object-cover mb-2"
              src="https://images.pexels.com/photos/1518419/pexels-photo-1518419.jpeg"
              alt="concurso"
            />
            <h3>Francisco Pascual Martín</h3>
            <h4>@frPascu</h4>
          </div>
          <div className="flex flex-col items-center w-1/3 p-3 bg-white marker">
            <img
              className=" w-full h-[40vh] object-cover mb-2"
              src="https://images.pexels.com/photos/1518419/pexels-photo-1518419.jpeg"
              alt="concurso"
            />
            <h3>Francisco Pascual Martín</h3>
            <h4>@frPascu</h4>
          </div>
          <div className="flex flex-col items-center w-1/3 p-3 bg-white marker">
            <img
              className=" w-full h-[40vh] object-cover mb-2"
              src="https://images.pexels.com/photos/1518419/pexels-photo-1518419.jpeg"
              alt="concurso"
            />
            <h3>Francisco Pascual Martín</h3>
            <h4>@frPascu</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fiesta;
