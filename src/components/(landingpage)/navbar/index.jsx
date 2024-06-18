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


  // Função para alternar a visibilidade do menu hamburguer
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };


const handleLinkClickHome = () => {
  setShowMenu(false);
  setShowDropdown(false);
  setShowDropdownSC(false);
};

const toggleDropdown = () => {
  setShowDropdown(!showDropdown);
  setShowDropdownSC(false)
};

const toggleDropdownTwo = () => {
  setShowDropdownSC(!showDropdownT);
  setShowDropdown(false)
};

  return (
    <nav className="nav" >
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
              <Link href="/" onClick={handleLinkClickHome}>HOME</Link>
            </li>
            <li>
              <Link href="/palestrantes" onClick={handleLinkClickHome}>PALESTRANTES</Link>
            </li>
            <div className="dropdown">
            <li>
              <button href="/" onClick={toggleDropdown} className="dropbtn">PROGRAMAÇÃO</button>
            </li>
            <div className={`dropdown-content ${showDropdown ? "show" : ""}`}>
            <Link href="/programacao">Agenda 2024</Link>
            <Link href="/programacao">SatsWeek</Link>
            <Link href="/programacao">SatsArte</Link>
            <Link href="/programacao">SatsGaming</Link>
            <Link href="/programacao">SatsKids</Link>
            <Link href="/programacao">SatsParty</Link>
            <Link href="/programacao">SatsMarket</Link>
            </div>
            </div>
            <div className="dropdown">
            <li>
              <button href="/" onClick={toggleDropdownTwo} className="dropbtn">MAIS</button>
            </li>
            <div className={`dropdown-content ${showDropdownT ? "show" : ""}`}>
            <Link href="/programacao">Ingresso Estudante</Link>
            <Link href="/programacao">Imprensa</Link>
            <Link href="/programacao">Patrocínio</Link>
            <Link href="/programacao">Hotéis</Link>
            <Link href="/programacao">Local do Evento</Link>
            <Link href="/faq" onClick={handleLinkClickHome}>Faq</Link>
            </div>
            </div>
            <li>
              <Link href="/contato" onClick={handleLinkClickHome}>CONTATO</Link>
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
