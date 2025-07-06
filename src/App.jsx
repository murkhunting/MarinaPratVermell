import "./App.css";
import Header from "./components/Header";
import Portada from "./components/Portada";
import Participa from "./components/Participa";
import Barrio from "./components/Barrio";
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
        className="custom-scroll-text bg-[#ddefe6] py-8"
      />
      <Participa />
      <ScrollVelocity
        texts={[
          "Conoce tu historia - Descubre el Barrio - Conoce tu historia - Descubre el Barrio - Conoce tu historia - Descubre el Barrio - Conoce tu historia - Descubre el Barrio -",
        ]}
        className="custom-scroll-text bg-[#ddefe6] py-8"
      />
      <Barrio />
      <ScrollVelocity
        texts={[
          "Fem Festa - Fem Barri - Fem Festa - Fem Barri - Fem Festa - Fem Barri - Fem Festa - Fem Barri - Fem Festa - Fem Barri - Fem Festa - Fem Barri -",
        ]}
        className="custom-scroll-text bg-[#ddefe6] py-8"
      />
      <Fiesta />
      <ScrollVelocity
        texts={[
          "Tu opinión es lo que más importa - Tu opinión es lo que más importa - Tu opinión es lo que más importa - Tu opinión es lo que más importa -",
        ]}
        className="custom-scroll-text bg-[#ddefe6] py-8"
      />
      <Comenta />
    </>
  );
}

export default App;
