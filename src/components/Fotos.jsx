import React from "react";

const fotosData = [
  {
    src: "https://images.pexels.com/photos/1518419/pexels-photo-1518419.jpeg",
    alt: "concurso",
    nombre: "Francisco Pascual Martín",
    usuario: "@frPascu",
  },
  {
    src: "https://images.pexels.com/photos/1518419/pexels-photo-1518419.jpeg",
    alt: "concurso",
    nombre: "Francisco Pascual Martín",
    usuario: "@frPascu",
  },
  {
    src: "https://images.pexels.com/photos/1518419/pexels-photo-1518419.jpeg",
    alt: "concurso",
    nombre: "Francisco Pascual Martín",
    usuario: "@frPascu",
  },
  {
    src: "https://images.pexels.com/photos/1518419/pexels-photo-1518419.jpeg",
    alt: "concurso",
    nombre: "Otra Persona",
    usuario: "@otra",
  },
  {
    src: "https://images.pexels.com/photos/1518419/pexels-photo-1518419.jpeg",
    alt: "concurso",
    nombre: "Francisco Pascual Martín",
    usuario: "@frPascu",
  },
  {
    src: "https://images.pexels.com/photos/1518419/pexels-photo-1518419.jpeg",
    alt: "concurso",
    nombre: "Francisco Pascual Martín",
    usuario: "@frPascu",
  },
  {
    src: "https://images.pexels.com/photos/1518419/pexels-photo-1518419.jpeg",
    alt: "concurso",
    nombre: "Francisco Pascual Martín",
    usuario: "@frPascu",
  },
  {
    src: "https://images.pexels.com/photos/1518419/pexels-photo-1518419.jpeg",
    alt: "concurso",
    nombre: "Otra Persona",
    usuario: "@otra",
  },
  {
    src: "https://images.pexels.com/photos/1518419/pexels-photo-1518419.jpeg",
    alt: "concurso",
    nombre: "Francisco Pascual Martín",
    usuario: "@frPascu",
  },
];

const FotoCard = ({ src, alt, nombre, usuario }) => (
  <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-[31%] p-3 bg-white marker shadow-md transition-transform duration-300 hover:-rotate-2">
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
