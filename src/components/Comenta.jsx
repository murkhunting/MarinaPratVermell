import React, { useState, useRef, useEffect } from "react";
import ScrollVelocity from "./ScrollVelocity";

const Comenta = () => {
  return (
    <section
      id="comenta"
      className="flex flex-col py-10 justify-start items-center w-[100vw] h-[100vh] relative overflow-hidden"
    >
      <h2 className="poppins text-black text-3xl text-center">
        Un <b>Gran Barrio</b> conlleva una <b>Gran Responsabilidad</b>, por eso
        te necesitamos <b>Tus ideas</b>.
      </h2>
    </section>
  );
};

export default Comenta;
