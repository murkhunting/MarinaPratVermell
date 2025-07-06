import React, { useState, useRef, useEffect } from "react";
import Fotos from "./Fotos";

const Fiesta = () => {
  return (
    <section
      id="fiesta"
      className="flex flex-col fondo justify-start items-center w-screen min-h-screen relative overflow-hidden"
    >
      <div className="flex flex-col justify-start items-center w-screen py-16 ">
        <h2 className="oswald clarito text-8xl text-center mb-16">
          FIESTA MAYOR DEL BARRIO
        </h2>
        <h3 className="poppins clarito text-3xl text-center mb-12">
          Las Fiestas nos unen. Tu eres el protagonista.
        </h3>
        <div className="bg-[#ddefe6] flex flex-row w-full h-[80vh]">
          <div className="w-1/2 rojo"></div>
          <div className="w-1/2 p-16 flex justify-center items-center relative overflow-hidden">
            {/* Imagen de fondo con blur */}
            <div
              className="absolute inset-0 bg-center bg-cover blur-md opacity-90"
              style={{ backgroundImage: "url('/assets/poster-MPV.png')" }}
            ></div>

            {/* Imagen principal */}
            <img
              className="w-[350px] transition-transform shadow-md duration-300 hover:-translate-y-[2px] relative z-10"
              src="/assets/poster-MPV.png"
              alt="Logo"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center w-screen p-16 ">
        <h2 className="oswald clarito text-8xl text-center mb-16">
          CONCURSO DE FOTOGRAFÍA
        </h2>
        <h3 className="poppins clarito text-3xl text-center mb-12">
          ¿Quieres que tu foto aparezca en la Web? Participa en la{" "}
          <b>Memoria del Barrio</b>
        </h3>
        <h4 className="poppins text-2xl clarito mb-2 font-semibold">
          Envíanos tus mejores fotos de la Fiesta y entra en el concurso
        </h4>
        <h4 className="poppins text-2xl clarito mb-2 font-semibold">
          ¡Etiquetaremos tu Instagram para que te sigan los vecions del Barrio!
        </h4>
        <form className="space-y-6 p-6 max-w-[900px] w-full mx-auto bg-transparent mt-4">
          {/* Fila 1: Nombre completo + Correo electrónico */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col w-full md:w-1/2">
              <label className="text-[#ddefe6] text-xl mb-2 ml-[10px]">
                Nombre y apellidos
              </label>
              <input
                type="text"
                placeholder="Nombre completo"
                className="bg-[#ddefe6] text-[#014b49] placeholder-[#027a76] border-none rounded-full p-4 poppins"
              />
            </div>
            <div className="flex flex-col w-full md:w-1/2">
              <label className="text-[#ddefe6] text-xl mb-2 ml-[10px]">
                Cuenta de instagram (opcional)
              </label>
              <input
                type="email"
                placeholder="Comparte tu cuenta"
                className="bg-[#ddefe6] text-[#014b49] placeholder-[#027a76] border-none rounded-full p-4 poppins"
              />
            </div>
          </div>

          {/* Motivación */}
          <label className="text-[#ddefe6] text-xl mb-8 ml-[10px]">
            Selecciona tus Mejores Fotos:
          </label>
          <button className="w-1/2 mt-2 poppins flex justify-start items-start py-[16px] px-4 bg-[#ddefe6] rounded-full text-[#027a76]  hover:bg-[#e75a59] hover:text-[#ddefe6] transition-transform duration-300 hover:-translate-y-[2px] cursor-pointer">
            Sube tus Fotos ↑
          </button>

          <button className="w-[210px] flex justify-center items-center py-[8px] bg-[#e75a59] rounded-full border-3 text-[#ddefe6] border-[#ddefe6] text#ddefe6] hover:bg-[#027a76] transition-transform duration-300 hover:-translate-y-[2px] cursor-pointer">
            PARTICIPA EN EL CONCURSO
          </button>
        </form>
      </div>
      <div className="flex flex-col justify-start items-center w-screen pb-16">
        <h2 className="oswald clarito text-8xl text-center mb-8">
          FOTOS GANADORAS
        </h2>
        <Fotos />
      </div>
    </section>
  );
};

export default Fiesta;
