import "./App.css";
import Header from "./components/Header";
import Portada from "./components/Portada";
import Participa from "./components/Participa";
import Fiesta from "./components/Fiesta";
import Comenta from "./components/Comenta";
import ScrollVelocity from "./components/ScrollVelocity";

function App() {
  return (
    <>
      <Header />
      <Portada />
      <ScrollVelocity
        texts={[
          "Mejora el Barrio - Aporta tus ideas - Mejora el Barrio - Aporta tus ideas - Mejora el Barrio - Aporta tus ideas - Mejora el Barrio - Aporta tus ideas -",
        ]}
        className="custom-scroll-text bg-[#8FD8FF] py-6"
      />
      <Participa />
      <ScrollVelocity
        texts={[
          "Fem Festa - Fem Barri - Fem Festa - Fem Barri - Fem Festa - Fem Barri - Fem Festa - Fem Barri - Fem Festa - Fem Barri - Fem Festa - Fem Barri -",
        ]}
        className="custom-scroll-text bg-[#FFCD7B] py-6"
      />
      <Fiesta />
      <ScrollVelocity
        texts={[
          "Tu opinión es lo que más importa - Tu opinión es lo que más importa - Tu opinión es lo que más importa - Tu opinión es lo que más importa -",
        ]}
        className="custom-scroll-text bg-[#89E291] py-6"
      />
      <Comenta />
    </>
  );
}

export default App;
