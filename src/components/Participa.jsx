import React, { useState, useRef, useEffect } from "react";
import Carousel from "./Carousel";

const Participa = () => {
  return (
    <section
      id="participa"
      className="flex flex-col justify-start items-center w-screen h-screen relative overflow-hidden"
    >
      <div className="flex flex-col justify-center items-center h-[40vh] bg-[#FFA7A7]">
        <h2 className="poppins text-black  text-3xl text-center">
          Un <b>Gran Barrio</b> conlleva una <b>Gran Responsabilidad</b>, por
          eso te necesitamos <b>Tus ideas</b>.
        </h2>
      </div>
      <Carousel />
    </section>
  );
};

export default Participa;
