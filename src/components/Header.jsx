const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-transparent py-1 px-6 flex flex-row justify-between items-center">
      <div>
        <a href="#inicio">
          <img
            className="w-[120px] transition-transform duration-300 hover:rotate-3"
            src="assets/MPV_logo.png"
            alt="Logo"
          />
        </a>
      </div>
      <nav className="hidden md:flex">
        <ul className="flex space-x-2 text-[14px] font-poppins">
          <a href="#participa">
            <li className="w-[130px] flex justify-center items-center py-[5px] bg-[#8FD8FF] border-4 border-white hover:bg-[#FFA7A7] transition-transform duration-300 hover:rotate-2">
              ¡PARTICIPA!
            </li>
          </a>
          <a href="#fiesta">
            <li className="w-[130px] flex justify-center items-center py-[5px] bg-[#FFCD7B] border-4 border-white hover:bg-[#FFA7A7] transition-transform duration-300 hover:rotate-2">
              FIESTA MAYOR
            </li>
          </a>
          <a href="#comenta">
            <li className="w-[130px] flex justify-center items-center py-[5px] bg-[#89E291] border-4 border-white hover:bg-[#FFA7A7] transition-transform duration-300 hover:rotate-2">
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
