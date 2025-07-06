import React from "react";

const eventosData = [
  {
    src: "https://images.pexels.com/photos/1518419/pexels-photo-1518419.jpeg",
    alt: "concurso",
    evento: "Francisco Pascual Martín",
    direccion: "@frPascu",
    fecha: "25 de Julio de 2025",
  },
  {
    src: "https://images.pexels.com/photos/1518419/pexels-photo-1518419.jpeg",
    alt: "concurso",
    evento: "Francisco Pascual Martín",
    direccion: "@frPascu",
    fecha: "21 de Agosto de 2025",
  },
  {
    src: "https://images.pexels.com/photos/1518419/pexels-photo-1518419.jpeg",
    alt: "concurso",
    evento: "Francisco Pascual Martín",
    direccion: "@frPascu",
    fecha: "12 de Septiembre de ",
  },
];

const EventoCard = ({ src, alt, evento, direccion, fecha }) => (
  <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-[31%] p-3 bg-[#ddefe6] marker shadow-md transition-transform duration-300 hover:-rotate-2">
    <img className="w-full h-[40vh]  object-cover mb-2" src={src} alt={alt} />
    <h2 className="text-2xl">{evento}</h2>
    <h4>{direccion}</h4>
    <h4>{fecha}</h4>
  </div>
);

const Eventos = () => {
  return (
    <div className="flex flex-wrap justify-center items-stretch w-full py-4 gap-8">
      {eventosData.map((foto, index) => (
        <EventoCard key={index} {...foto} />
      ))}
    </div>
  );
};

export default Eventos;
