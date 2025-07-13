import React from "react";

const eventosData = [
  {
    src: "https://images.pexels.com/photos/6340688/pexels-photo-6340688.jpeg",
    alt: "concurso",
    evento: "CONVOCATORIA ABIERTA",
    direccion: "Comisión de la Fiesta Mayor 2026",
    fecha: "Del 09 al 30 de Septiembre",
    hora: "Apertura a 10:00",
  },
  {
    src: "https://images.pexels.com/photos/8117471/pexels-photo-8117471.jpeg",
    alt: "concurso",
    evento: "RAÍCES Y HORIZONTES",
    direccion: "Taller de Visión Comunitaria",
    fecha: "19 de Octube 2025",
    hora: "De 16:00 a 19:30",
  },
  {
    src: "https://www.espectalium.com/wp-content/uploads/2025/03/fiesta-pueblo.jpg",
    alt: "concurso",
    evento: "DEL SUEÑO A LA REALIDAD",
    direccion: "Jornadas de Planificación Festiva",
    fecha: "15 de Diciembre 2025",
    hora: "De 10:30 a 14:00",
  },
];

const EventoCard = ({ src, alt, evento, direccion, fecha, hora }) => (
  <div className="flex flex-col items-center text-center w-full sm:w-1/2 lg:w-[31%] p-3 bg-[#ddefe6] marker shadow-md transition-transform duration-300 hover:-rotate-2">
    <img
      className="w-full h-[30vh] md:h-[40vh]  object-cover mb-2"
      src={src}
      alt={alt}
    />
    <h2 className="text-2xl">{evento}</h2>
    <h4 className="text-xl mb-2">{direccion}</h4>
    <h4 className="text-md">{fecha}</h4>
    <h4 className="text-md">{hora}</h4>
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
