import React, { useState, useRef, useEffect } from "react";
import ScrollVelocity from "./ScrollVelocity";

const Comenta = () => {
  return (
    <>
      <section
        id="comenta"
        className="flex flex-col py-16 justify-start rojo items-center w-screen relative overflow-hidden"
      >
        <h2 className="oswald clarito text-8xl text-center mb-16">
          DEJA TU COMENTARIO
        </h2>
        <h2 className="poppins clarito text-2xl text-center mb-8">
          <b>Tu opinión</b> es lo<b> Más Importante</b>. Comenta, Opina...
          Déjanos saber que piensas.
        </h2>
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
                Correo Electrónico
              </label>
              <input
                type="email"
                placeholder="vecino@marinapratvermell.com"
                className="bg-[#ddefe6] text-[#014b49] placeholder-[#027a76] border-none rounded-full p-4 poppins"
              />
            </div>
          </div>

          {/* Motivación */}
          <div className="flex flex-col">
            <label className="text-[#ddefe6] text-xl mb-2 ml-[10px]">
              ¿Qué mejorarías para el año que viene?
            </label>
            <textarea
              placeholder="Explícanos qué te gustaría mejorar para el año que viene"
              className="bg-[#ddefe6] text-[#014b49] placeholder-[#027a76] border-none rounded-[25px] p-4 poppins"
              rows="4"
            ></textarea>
          </div>
          <button className="w-[180px] flex justify-center items-center py-[8px] bg-[#027a76] rounded-full border-3 text-[#ddefe6] border-[#ddefe6] text#ddefe6] hover:bg-[#e75a59] transition-transform duration-300 hover:-translate-y-[2px] cursor-pointer">
            ENVÍA TU OPINIÓN
          </button>
        </form>
      </section>
      <section className="flex flex-col py-8 justify-start bg-[#ddefe6] items-center w-screen relative"></section>
    </>
  );
};

export default Comenta;
