import MenuRes from "./MenuRes";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-transparent py-1 px-2 md:px-6 flex flex-row justify-between items-start">
      <div>
        <a href="#inicio">
          <img
            className="w-[110px] md:w-[130px] transition-transform duration-300 hover:-translate-y-[2px] filter drop-shadow-[0_3px_3px_rgba(0,0,0,0.55)]"
            src="assets/MPV_logo.png"
            alt="Logo"
          />
        </a>
      </div>
      <nav className="hidden md:flex">
        <ul className="flex space-x-2 text-[16px] text-[#ddefe6] oswald mt-4">
          <a href="#participa">
            <li className="w-[120px] flex justify-center items-center py-[6px] bg-[#027a76] rounded-full border-3 border-[#ddefe6] hover:bg-[#e75a59] transition-transform duration-300 hover:-translate-y-[2px] shadow-[0_3px_3px_rgba(0,0,0,0.35)]">
              EVENTOS
            </li>
          </a>
          <a href="#barrio">
            <li className="w-[120px] flex justify-center items-center py-[6px] bg-[#027a76] rounded-full border-3 border-[#ddefe6] hover:bg-[#e75a59] transition-transform duration-300 hover:-translate-y-[2px] shadow-[0_3px_3px_rgba(0,0,0,0.35)]">
              EL BARRIO
            </li>
          </a>
          <a href="#fiesta">
            <li className="w-[120px] flex justify-center items-center py-[6px] bg-[#027a76] rounded-full border-3 border-[#ddefe6] hover:bg-[#e75a59] transition-transform duration-300 hover:-translate-y-[2px] shadow-[0_3px_3px_rgba(0,0,0,0.35)]">
              FIESTA MAYOR
            </li>
          </a>
          <a href="#comenta">
            <li className="w-[120px] flex justify-center items-center py-[6px] bg-[#027a76] rounded-full border-3 border-[#ddefe6] hover:bg-[#e75a59] transition-transform duration-300 hover:-translate-y-[2px] shadow-[0_3px_3px_rgba(0,0,0,0.35)]">
              ¡COMENTA!
            </li>
          </a>
        </ul>
      </nav>
      <div className="md:hidden text-2xl">
        <MenuRes />
      </div>
    </header>
  );
};

export default Header;
