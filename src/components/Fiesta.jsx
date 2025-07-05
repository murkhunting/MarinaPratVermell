import React, { useState, useRef, useEffect } from "react";
import Fotos from "./Fotos";

const Fiesta = () => {
  return (
    <section className="flex flex-col justify-start items-center w-screen min-h-screen relative overflow-hidden">
      <div className="flex flex-col justify-center items-center h-[70vh]">
        <h2 className="poppins text-black text-3xl text-center">
          Un <b>Gran Barrio</b> conlleva una <b>Gran Responsabilidad</b>, por
          eso te necesitamos <b>Tus ideas</b>.
        </h2>
      </div>
      <div className="flex flex-col justify-start items-center w-screen p-16 bg-[url(assets/carton.avif)]">
        <h2 className=" text-black text-6xl text-center mb-8">
          GANADORES CONCURSO 2024
        </h2>
        <Fotos />
      </div>
    </section>
  );
};

export default Fiesta;
