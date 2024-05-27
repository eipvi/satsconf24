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

  // Função para alternar a visibilidade do menu hamburguer
  const toggleMenu = () => {
    setShowMenu(!showMenu);
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
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/palestrantes">PALESTRANTES</Link>
            </li>
            <li>
              <Link href="/#programacao">PROGRAMAÇÃO</Link>
            </li>
            <li>
              <Link href="/contato">CONTATO</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
          </ul>
          <div>
            <BtnIngresso url="https://satsconf.vercel.app/ingressos">
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
