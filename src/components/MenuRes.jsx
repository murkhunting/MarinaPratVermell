import { useState } from "react";

const MenuRes = () => {
  const [abierto, setAbierto] = useState(false);

  return (
    <div>
      {/* Botón burger/X */}
      <button
        onClick={() => setAbierto(!abierto)}
        className="fondo fixed w-[58px] top-4 right-2 z-50 flex flex-row justify-center items-center py-[6px] rounded-full border-3 border-[#ddefe6] shadow-[0_3px_3px_rgba(0,0,0,0.35)]"
      >
        <div className=" w-10 h-10 flex flex-col justify-center items-center gap-1 group">
          <span
            className={`h-0.5 w-6 bg-[#ddefe6] transition-transform duration-300 ${
              abierto ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-[#ddefe6] transition-all duration-300 ${
              abierto ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-[#ddefe6] transition-transform duration-300 ${
              abierto ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </div>
      </button>

      {/* Menú lateral */}
      <div
        className={`fixed top-20 w-40 fondo clarito p-6 transition-all duration-300 z-40 rounded-3xl border-3 border-[#ddefe6] shadow-[0_3px_3px_rgba(0,0,0,0.35)] ${
          abierto ? "right-2" : "-right-60"
        }`}
      >
        <ul className="space-y-4 text-xl flex flex-col justify-center items-center">
          <li>
            <a href="#participa">EVENTOS</a>
          </li>
          <li>
            <a href="#barrio">EL BARRIO</a>
          </li>
          <li>
            <a href="#fiesta">FIESTA MAYOR</a>
          </li>
          <li>
            <a href="#comenta">¡COMENTA!</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuRes;
