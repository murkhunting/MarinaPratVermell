import React, { useState, useRef, useEffect } from "react";
import Carousel from "./Carousel";
import Eventos from "./Eventos";

const Barrio = () => {
  return (
    <section className="flex flex-col justify-start items-center w-screen relative overflow-hidden">
      <div id="barrio" className="absolute -top-[90px]"></div>
      <div className="flex flex-col justify-center items-center w-full pt-12 pb-4 md:py-14 rojo px-4 md:px-0">
        <h2 className="oswald clarito text-[60px] md:text-8xl text-center mb-8 md:mb-12">
          LA MARINA DEL PRAT VERMELL
        </h2>
        <h3 className="poppins clarito text-2xl md:text-3xl text-center mb-12">
          ¿Realmente conoces tu Barrio? Aquí van unos <b>Datos Curiosos</b> de
          su historia:
        </h3>
        <div className="flex flex-col md:flex-row w-full px-0 md:px-20 gap-8 justify-center text-[#027a76] mb-12">
          <div className="bg-[#ddefe6] p-6 md:p-12 shadow-md flex flex-col w-full md:w-1/3 justify-center items-center text-center poppins">
            <img
              className="w-[60px] mb-6"
              src="/assets/industria.png"
              alt="Logo"
            />
            <h4 className="text-xl md:text-2xl mb-2 font-semibold">
              De tierras agrícolas a epicentro industrial
            </h4>
            <p className="text-md md:text-xl">
              ¿Sabías que lo que hoy es La Marina del Prat Vermell fue, durante
              siglos, una fértil zona agrícola regada por el Canal de la
              Infanta? Hoy, ese mismo terreno está destinado a convertirse en
              uno de los nuevos polos residenciales de Barcelona.
            </p>
          </div>
          <div className="bg-[#ddefe6] p-6 md:p-12 shadow-md flex flex-col w-full md:w-1/3 justify-center items-center text-center poppins">
            <img
              className="w-[60px] mb-6"
              src="/assets/nombre.png"
              alt="Logo"
            />
            <h4 className="text-xl md:text-2xl mb-2 font-semibold">
              Origen del nombre de la Marina del Prat Vermell
            </h4>
            <p className="text-md md:text-xl">
              El nombre proviene de la combinación de dos elementos: "Marina",
              que hace referencia a la zona baja de Sants, y "Prat Vermell"
              (Prado Rojo), que se debe a los campos de esta zona donde se
              secaban las telas teñidas de rojo de las fábricas textiles.
            </p>
          </div>
          <div className="bg-[#ddefe6] p-6 md:p-12 shadow-md flex flex-col w-full md:w-1/3 justify-center items-center text-center poppins">
            <img className="w-[60px] mb-6" src="/assets/coche.png" alt="Logo" />
            <h4 className="text-xl md:text-2xl mb-2 font-semibold">
              La fábrica SEAT cambió el barrio para siempre
            </h4>
            <p className="text-md md:text-xl">
              Durante el siglo XX, la fábrica SEAT y la construcción de
              viviendas para sus trabajadores transformaron el barrio en un
              núcleo obrero con fuerte identidad colectiva. Muchos de los
              residentes históricos aún guardan recuerdos de esta época y aún
              sigue en pie.
            </p>
          </div>
        </div>
        <h3 className="poppins clarito text-2xl md:text-3xl text-center mb-4 md:mb-12">
          ¿Quieres formar parte de los <b> Datos Curiosos del Futuro</b>?
        </h3>
        <h3 className="poppins clarito text-2xl md:text-3xl text-center mb-4 md:mb-8">
          Participa, Descubre, Forma parte de la Historia...
          <b> Tú eres tu Barrio.</b>
        </h3>
      </div>
      <Carousel />
    </section>
  );
};

export default Barrio;
