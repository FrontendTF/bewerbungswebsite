import React, { useState } from "react";
import Logo from "../assets/Logo.jpg";
// import IconClosed from "../assets/ClosedMenu_ICON.png";
// import IconOpened from "../assets/OpenedMenu.png";
// import LebenslaufPDF from "../assets/Lebenslauf.pdf";

const Pageheader: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  /*scroll to*/
  const handleLogoClick = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed bg-white w-full z-10 border-b-2">
      <section className="flex flex-col">
        <div className="flex justify-between w-11/12 py-1 md:py-3 mx-auto items-center">
          <div className="flex items-center md:w-4/12 hover:cursor-pointer">
            <img src={Logo} alt="Logo" onClick={handleLogoClick} />
            <h2 className="H2">Thomas.</h2>
          </div>

          {/*###Navbar###*/}
          <nav className="hidden md:flex w-7/12 justify-between py-3 ">
            <a href="#aboutme" className="link relative group">
              Über mich
              <span className="underline"></span>
            </a>
            <a
              className="link relative group"
              //   href={LebenslaufPDF}
              target="_blank"
              rel="noopener noreferrer"
            >
              Lebenslauf
              <span className="underline"></span>
            </a>
            <a href="#motivation" className="link relative group">
              Motivation
              <span className="underline"></span>
            </a>
            <a href="#contact" className="link relative group">
              Kontakt
              <span className="underline"></span>
            </a>
          </nav>

          <div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="transition duration-300 ease-in md:hidden"
            >
              <img
                //      src={isOpen ? IconOpened : IconClosed}
                alt={isOpen ? "Close Menu" : "Open Menu"}
                className={`transform transition-transform duration-500 ease-in-out ${
                  isOpen ? "rotate-180 scale-105" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/*###Side Navbar###*/}
        <nav
          className={`bg-white flex flex-col text-center border-y-4 border-l-4  fixed right-0 top-28 h-auto w-64 transform transition-transform duration-500 md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <a href="#aboutme" className="menu-link">
            Über mich
          </a>
          <a
            className="menu-link"
            //      href={LebenslaufPDF}
            target="_blank"
            rel="noopener noreferrer"
          >
            Lebenslauf
          </a>
          <a href="#motivation" className="menu-link">
            Motivation
          </a>
          <a href="#contact" className="menu-link">
            Kontakt
          </a>
          <img className="w-1/2 mx-auto" src={Logo} alt="Logo" />
        </nav>
      </section>
    </header>
  );
};

export default Pageheader;
