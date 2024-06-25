"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "@/app/globals.css";

import MeuComponenteLogo from "@/components/(landingpage)/images/MeuComponenteLogo/index";
import BtnIngresso from "@/components/(landingpage)/ui/button/BtnIngresso/index";

const Navbar = () => {
  // Estado para controlar a exibição do menu hamburguer
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdownT, setShowDropdownSC] = useState(false);

  //toggleMenu: Alterna a visibilidade do menu hambúrguer, mudando o estado de showMenu entre true e false.
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  //handleLinkClickHome: Fecha todos os menus e dropdowns quando um link é clicado, mudando todos os estados (showMenu, showDropdown, showDropdownT) para false.
  const handleLinkClickHome = () => {
    // showMenu: Controla a visibilidade do menu hambúrguer (abrir/fechar).
    setShowMenu(false);
    //showDropdown: Controla a visibilidade do primeiro dropdown ("PROGRAMAÇÃO").
    setShowDropdown(false);
    //showDropdownT: Controla a visibilidade do segundo dropdown ("MAIS").
    setShowDropdownSC(false);
  };

  //toggleDropdown: Alterna a visibilidade do primeiro dropdown ("PROGRAMAÇÃO"), e fecha o segundo dropdown se estiver aberto.
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    setShowDropdownSC(false);
  };

  //toggleDropdownTwo: Alterna a visibilidade do segundo dropdown ("MAIS"), e fecha o primeiro dropdown se estiver aberto.
  const toggleDropdownTwo = () => {
    setShowDropdownSC(!showDropdownT);
    setShowDropdown(false);
  };

  const handleMouseEnterDropdown = () => {
    setShowDropdown(true);
  };

  const handleMouseLeaveDropdown = () => {
    setShowDropdown(false);
  };

  const handleMouseEnterDropdownT = () => {
    setShowDropdownSC(true);
  };

  const handleMouseLeaveDropdownT = () => {
    setShowDropdownSC(false);
  };

  return (
    <nav className="nav">
      <div className="navBorder">
        <div className="navContainer">
          {/* link para pagina inicial da landingpage*/}
          <div className="navLogo">
            <Link href="/">
              <div className="logo">
                <MeuComponenteLogo />
              </div>
            </Link>
          </div>

          <ul className={`navMenu ${showMenu ? "showMenu" : ""}`}>
            <li>
              <Link href="/" onClick={handleLinkClickHome}>
                HOME
              </Link>
            </li>
            <li>
              <Link href="/palestrantes" onClick={handleLinkClickHome}>
                PALESTRANTES
              </Link>
            </li>

            <div
              className="dropdown"
              onMouseEnter={handleMouseEnterDropdown}
              onMouseLeave={handleMouseLeaveDropdown}
            >
              <li>
                <Link
                  href="/"
                  onClick={toggleDropdown}
                  className="dropbtn navItem"
                >
                  PROGRAMAÇÃO
                </Link>
              </li>
              <div className={`dropdown-content ${showDropdown ? "show" : ""}`}>
                <Link href="/programacao" onClick={handleLinkClickHome}>
                  Agenda 2024
                </Link>
                <Link href="/programacao" onClick={handleLinkClickHome}>
                  SatsWeek
                </Link>
                <Link href="/programacao" onClick={handleLinkClickHome}>
                  SatsArte
                </Link>
                <Link href="/programacao" onClick={handleLinkClickHome}>
                  SatsGaming
                </Link>
                <Link href="/programacao" onClick={handleLinkClickHome}>
                  SatsKids
                </Link>
                <Link href="/programacao" onClick={handleLinkClickHome}>
                  SatsParty
                </Link>
                <Link href="/programacao" onClick={handleLinkClickHome}>
                  SatsMarket
                </Link>
              </div>
            </div>
            <div
              className="dropdown"
              onMouseEnter={handleMouseEnterDropdownT}
              onMouseLeave={handleMouseLeaveDropdownT}
            >
              <li>
                <Link
                  href="/"
                  onClick={toggleDropdownTwo}
                  className="dropbtn navItem"
                >
                  MAIS
                </Link>
              </li>
              <div
                className={`dropdown-content ${showDropdownT ? "show" : ""}`}
              >
                <Link href="/programacao" onClick={handleLinkClickHome}>
                  Ingresso Estudante
                </Link>
                <Link href="/programacao" onClick={handleLinkClickHome}>
                  Imprensa
                </Link>
                <Link href="/programacao" onClick={handleLinkClickHome}>
                  Patrocínio
                </Link>
                <Link href="/programacao" onClick={handleLinkClickHome}>
                  Hotéis
                </Link>
                <Link href="/programacao" onClick={handleLinkClickHome}>
                  Local do Evento
                </Link>
                <Link href="/faq" onClick={handleLinkClickHome}>
                  Faq
                </Link>
              </div>
            </div>
            <li>
              <Link href="/contato" onClick={handleLinkClickHome}>
                CONTATO
              </Link>
            </li>
          </ul>
          <div>
            <BtnIngresso url="https://www.satsconf.com.br/ingressos">
              Comprar Ingresso{" "}
            </BtnIngresso>
          </div>

          <div>
            <button className="hamburgerBtn" onClick={toggleMenu}>
              {showMenu ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
