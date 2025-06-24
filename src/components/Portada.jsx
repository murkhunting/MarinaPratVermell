import React, { useState, useRef, useEffect } from "react";

const Portada = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const audioFesta = useRef(null);
  const audioBarri = useRef(null);

  useEffect(() => {
    // Precargar audios
    audioFesta.current = new Audio("/assets/festa.mp3");
    audioFesta.current.volume = 0.5;
    audioBarri.current = new Audio("/assets/barri.mp3");
    audioBarri.current.volume = 0.5;

    // Intentar desbloquear audio
    const unlockAudio = async () => {
      try {
        await audioFesta.current.play();
        await audioFesta.current.pause();
        audioFesta.current.currentTime = 0;
      } catch (e) {
        console.log("Audio bloqueado hasta interacción del usuario");
      }
    };
    unlockAudio();

    return () => {
      audioFesta.current.pause();
      audioBarri.current.pause();
    };
  }, []);

  const handleHover = (type) => {
    setActiveVideo(type);
    if (type === "festa") {
      audioBarri.current.pause();
      audioBarri.current.currentTime = 0;
      audioFesta.current.currentTime = 0;
      audioFesta.current.play().catch((e) => console.log(e));
    } else if (type === "barri") {
      audioFesta.current.pause();
      audioFesta.current.currentTime = 0;
      audioBarri.current.currentTime = 0;
      audioBarri.current.play().catch((e) => console.log(e));
    }
  };

  const handleHoverEnd = () => {
    setActiveVideo(null);
    audioFesta.current.pause();
    audioFesta.current.currentTime = 0;
    audioBarri.current.pause();
    audioBarri.current.currentTime = 0;
  };

  return (
    <section
      id="inicio"
      className="flex flex-col justify-center items-center text-white h-screen relative overflow-hidden"
    >
      {/* Elementos de fondo */}
      <img
        className={`absolute brightness-[0.5] top-0 object-cover w-screen h-screen z-0 transition-opacity duration-500 ${
          activeVideo ? "opacity-0" : "opacity-100"
        }`}
        src="https://images.pexels.com/photos/1518419/pexels-photo-1518419.jpeg"
        alt="Portada"
      />
      <video
        autoPlay
        muted
        loop
        playsInline
        className={`absolute top-0 left-0 w-screen h-screen object-cover z-10 transition-opacity duration-500 ${
          activeVideo === "festa" ? "flex" : "hidden"
        }`}
      >
        <source src="/assets/festa.mp4" type="video/mp4" />
      </video>
      <video
        autoPlay
        muted
        loop
        playsInline
        className={`absolute top-0 left-0 w-screen h-screen object-cover z-10 transition-opacity duration-500 ${
          activeVideo === "barri" ? "flex" : "hidden"
        }`}
      >
        <source src="/assets/barri.mp4" type="video/mp4" />
      </video>

      {/* Contenido principal */}
      <img
        className={`w-[650px] mb-[50px] z-20 shadow-xs mt-[-100px] transition-opacity duration-500 ${
          activeVideo ? "opacity-10" : "opacity-100"
        }`}
        src="/assets/MarinaPratVermell.png"
        alt="Logo completo"
      />

      <div className="flex flex-row z-20 w-screen">
        <div
          className="w-[50%] flex flex-col justify-center items-center font-limelight text-8xl text-black con-outline"
          onMouseEnter={() => handleHover("festa")}
          onMouseLeave={handleHoverEnd}
        >
          <img
            className={`h-[90px] mb-[50px] z-20 cursor-pointer transition-opacity duration-500 ${
              activeVideo === "barri" ? "opacity-10" : "opacity-100"
            }`}
            src="/assets/festa1.png"
            alt="Fem Festa"
          />
        </div>
        <div
          className="w-[50%] flex flex-col justify-center items-center font-limelight text-8xl text-black con-outline"
          onMouseEnter={() => handleHover("barri")}
          onMouseLeave={handleHoverEnd}
        >
          <img
            className={`h-[90px] mb-[50px] z-20 cursor-pointer transition-opacity duration-500 ${
              activeVideo === "festa" ? "opacity-10" : "opacity-100"
            }`}
            src="/assets/Barri1.png"
            alt="Fem Barri"
          />
        </div>
      </div>
    </section>
  );
};

export default Portada;
