"use client";
import React from "react";
import { useContext } from "react";
import { ModalContext } from "@/providers/ModalContext";
import BtnNovidades from "@/components/(landingpage)/ui/button/BtnNovidades";


const Programacao = ({ children }) => {
  const { handleModalVisible } = useContext(ModalContext);

  const handleOpenModal = () => {
    handleModalVisible();
  };
  return (
    <section id="PagProgramacao">
      {/* Aqui é onde você renderiza children */} {children}
      <div className="containerPagProgramacao">
        <h2>Em breve mais informações!</h2>
        <p>Estamos preparando algo especial para você!</p>
        <BtnNovidades onClick={handleOpenModal}>Seja notificado!</BtnNovidades>
      </div>
     
    </section>
  );
};

export default Programacao;
