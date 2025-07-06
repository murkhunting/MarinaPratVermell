const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-transparent py-1 px-6 flex flex-row justify-between items-start">
      <div>
        <a href="#inicio">
          <img
            className="w-[130px] transition-transform duration-300 hover:-translate-y-[2px]"
            src="assets/MPV_logo.png"
            alt="Logo"
          />
        </a>
      </div>
      <nav className="hidden md:flex">
        <ul className="flex space-x-2 text-[16px] text-[#ddefe6] oswald mt-4">
          <a href="#participa">
            <li className="w-[120px] flex justify-center items-center py-[6px] bg-[#027a76] rounded-full border-3 border-[#ddefe6] hover:bg-[#e75a59] transition-transform duration-300 hover:-translate-y-[2px]">
              EVENTOS
            </li>
          </a>
          <a href="#barrio">
            <li className="w-[120px] flex justify-center items-center py-[6px] bg-[#027a76] rounded-full border-3 border-[#ddefe6] hover:bg-[#e75a59] transition-transform duration-300 hover:-translate-y-[2px]">
              EL BARRIO
            </li>
          </a>
          <a href="#fiesta">
            <li className="w-[120px] flex justify-center items-center py-[6px] bg-[#027a76] rounded-full border-3 border-[#ddefe6] hover:bg-[#e75a59] transition-transform duration-300 hover:-translate-y-[2px]">
              FIESTA MAYOR
            </li>
          </a>
          <a href="#comenta">
            <li className="w-[120px] flex justify-center items-center py-[6px] bg-[#027a76] rounded-full border-3 border-[#ddefe6] hover:bg-[#e75a59] transition-transform duration-300 hover:-translate-y-[2px]">
              ¡COMENTA!
            </li>
          </a>
        </ul>
      </nav>
      <button className="md:hidden text-2xl">☰</button>
    </header>
  );
};

export default Header;
