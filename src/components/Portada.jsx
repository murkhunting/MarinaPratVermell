import React, { useState, useRef, useEffect } from "react";

const Portada = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const audioFesta = useRef(null);
  const audioBarri = useRef(null);

  useEffect(() => {
    audioFesta.current = new Audio("/assets/festa.mp3");
    audioFesta.current.volume = 0.5;
    audioBarri.current = new Audio("/assets/barri.mp3");
    audioBarri.current.volume = 0.5;

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

  const handleActivate = (type) => {
    setActiveVideo(type);
    const isFesta = type === "festa";
    const playAudio = isFesta ? audioFesta : audioBarri;
    const pauseAudio = isFesta ? audioBarri : audioFesta;

    pauseAudio.current.pause();
    pauseAudio.current.currentTime = 0;

    playAudio.current.currentTime = 0;
    playAudio.current.play().catch((e) => console.log(e));
  };

  const handleEnd = () => {
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
      {/* Fondo estático */}
      <img
        className={`absolute brightness-[0.5] top-0 object-cover w-screen h-screen z-0 transition-opacity duration-500 ${
          activeVideo ? "opacity-0" : "opacity-100"
        }`}
        src="https://images.pexels.com/photos/1518419/pexels-photo-1518419.jpeg"
        alt="Portada"
      />

      {/* Vídeos */}
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

      {/* Título */}
      <h1
        className={`text-[#ddefe6] mt-[20px] md:mt-[-50px] mb-4 md:mb-8 z-20 text-[50px] md:text-[80px] oswald transition-opacity duration-500 text-center px-4 ${
          activeVideo ? "opacity-10" : "opacity-100"
        }`}
      >
        LA MARINA DEL PRAT VERMELL
      </h1>

      {/* Botones FEM FESTA / FEM BARRI */}
      <div className="flex flex-col md:flex-row z-20 w-full">
        <div
          className="w-full md:w-1/2 flex flex-col justify-center items-center con-outline py-1 md:py-6"
          onMouseEnter={() => handleActivate("festa")}
          onMouseLeave={handleEnd}
          onClick={() => handleActivate("festa")}
        >
          <h2
            className={`text-[#ddefe6] z-20 text-[85px] md:text-[100px] lg:text-[150px] oswald cursor-pointer transition-opacity duration-500 text-center ${
              activeVideo === "barri" ? "opacity-10" : "opacity-100"
            }`}
          >
            FEM FESTA!
          </h2>
        </div>

        <div
          className="w-full md:w-1/2 flex flex-col justify-center items-center con-outline py-1 md:py-6"
          onMouseEnter={() => handleActivate("barri")}
          onMouseLeave={handleEnd}
          onClick={() => handleActivate("barri")}
        >
          <h2
            className={`text-[#ddefe6] z-20 text-[85px] md:text-[100px] lg:text-[150px] oswald cursor-pointer transition-opacity duration-500 text-center ${
              activeVideo === "festa" ? "opacity-10" : "opacity-100"
            }`}
          >
            FEM BARRI!
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Portada;
