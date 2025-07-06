import React from "react";

const fotosData = [
  {
    src: "https://www.totbarcelona.cat/app/uploads/sites/11/2024/09/grup-de-diables-llancant-guspires-amb-1024x683.jpg",
    alt: "concurso",
    nombre: "Francisco Pascual Martín",
    usuario: "@frPascu",
  },
  {
    src: "https://www.totbarcelona.cat/app/uploads/sites/11/2024/12/correfoc-transformed-1.jpeg",
    alt: "concurso",
    nombre: "Laura Abedul Sanchez",
    usuario: "@laura.moves",
  },
  {
    src: "/assets/5.webp",
    alt: "concurso",
    nombre: "Marcos Alonso Sainz",
    usuario: "@urbansoul_bcn",
  },
  {
    src: "/assets/6.webp",
    alt: "concurso",
    nombre: "Joan García Pérez",
    usuario: "@joan.enlaonda",
  },
  {
    src: "/assets/7.webp",
    alt: "concurso",
    nombre: "Álvaro Anchón Rodríguez",
    usuario: "@A_anchonRo",
  },
  {
    src: "https://www.espectalium.com/wp-content/uploads/2025/03/fiesta-pueblo.jpg",
    alt: "concurso",
    nombre: "MArina Oriol Guzmán",
    usuario: "@verdemarina",
  },
];

const FotoCard = ({ src, alt, nombre, usuario }) => (
  <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-[31%] p-3 bg-[#ddefe6] marker shadow-md transition-transform duration-300 hover:-rotate-2">
    <img className="w-full h-[40vh] object-cover mb-2" src={src} alt={alt} />
    <h3>{nombre}</h3>
    <h4>{usuario}</h4>
  </div>
);

const Fotos = () => {
  return (
    <div className="flex flex-wrap justify-center items-stretch w-full py-4 gap-8">
      {fotosData.map((foto, index) => (
        <FotoCard key={index} {...foto} />
      ))}
    </div>
  );
};

export default Fotos;
