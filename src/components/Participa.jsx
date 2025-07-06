import React, { useState, useRef, useEffect } from "react";

import Eventos from "./Eventos";

const Participa = () => {
  return (
    <section
      id="participa"
      className="flex flex-col justify-start items-center w-screen relative overflow-hidden"
    >
      <div className="flex flex-col justify-center items-center w-full py-14 fondo">
        <h2 className="oswald clarito text-8xl text-center mb-12">
          ¡EVENTOS DEL BARRIO!
        </h2>

        <h3 className="poppins clarito text-3xl text-center mb-8">
          Mantente al día con los <b>Próximos Eventos</b> de la
          <b> Marina del Prat Vermell</b>.
        </h3>
        <div className="px-16">
          <Eventos />
        </div>
        <h2 className="oswald clarito text-8xl text-center my-12">
          ¡ROMPE LAS BARRERAS, PARTICIPA!
        </h2>
        <h3 className="poppins clarito text-3xl text-center mb-12">
          Un <b>Gran Barrio</b> conlleva una <b>Gran Responsabilidad</b>, por
          eso necesitamos <b>Tus ideas</b>.
        </h3>
        <h3 className="poppins clarito text-2xl text-center">
          Rellena el siguiente formulario para formar parte de la Junta del
          Barrio:
        </h3>
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

          {/* Fila 2: Teléfono + Edad */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col w-full md:w-1/2">
              <label className="text-[#ddefe6] text-xl mb-2 ml-[10px]">
                Número de Teléfono
              </label>
              <input
                type="tel"
                placeholder="600 00 00 00"
                className="bg-[#ddefe6] text-[#014b49] placeholder-[#027a76] border-none rounded-full p-4 poppins"
              />
            </div>
            <div className="flex flex-col w-full md:w-1/2">
              <label className="text-[#ddefe6] text-xl mb-2 ml-[10px]">
                Edad
              </label>
              <input
                type="number"
                placeholder="+ de 18 años"
                className="bg-[#ddefe6] text-[#014b49] placeholder-[#027a76] border-none rounded-full p-4 poppins"
              />
            </div>
          </div>

          {/* Selector de categoría */}
          <div className="flex flex-col">
            <label className="text-[#ddefe6] text-xl mb-2 ml-[10px]">
              ¿En qué área te gustaría ayudar?
            </label>
            <select className="bg-[#ddefe6] text-[#014b49] placeholder-[#027a76] border-none rounded-full p-4 poppins">
              <option value="">Selecciona una opción</option>
              <option value="comunicacion">Comunicación</option>
              <option value="logistica">Logística</option>
              <option value="contenidos">Contenidos culturales</option>
              <option value="participacion">Participación</option>
            </select>
          </div>

          {/* Motivación */}
          <div className="flex flex-col">
            <label className="text-[#ddefe6] text-xl mb-2 ml-[10px]">
              Motivación
            </label>
            <textarea
              placeholder="Explícanos tus motivaciones y porqué"
              className="bg-[#ddefe6] text-[#014b49] placeholder-[#027a76] border-none rounded-[25px] p-4 poppins"
              rows="4"
            ></textarea>
          </div>
          <button className="w-[180px] flex justify-center items-center py-[8px] bg-[#e75a59] rounded-full border-3 text-[#ddefe6] border-[#ddefe6] text#ddefe6] hover:bg-[#027a76] transition-transform duration-300 hover:-translate-y-[2px] cursor-pointer">
            ENVÍA TU SOLICITUD
          </button>
        </form>
      </div>
    </section>
  );
};

export default Participa;
