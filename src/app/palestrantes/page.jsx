"use client";
import React from "react";
//importação global do modalNovidades
import { useContext } from "react";
import { ModalContext } from "@/providers/ModalContext";

import BtnIngresso from "@/components/(landingpage)/ui/button/BtnIngresso";
import BtnNovidades from "@/components/(landingpage)/ui/button/BtnNovidades";
import Card from "@/components/(landingpage)/ui/modal/modalDestaque/profilecard";
import cookie from "js-cookie";

const Palestrantes = ({ children }) => {
  const { handleModalVisible } = useContext(ModalContext);

  const handleOpenModal = () => {
    handleModalVisible();
  };

  return (
    <div>
      {" "}
      {children}
      <div id="PagPalestrantes">
        <div className="bgContainerImageConvidadosPage">
          <div className="bgContainerConvidadosDestaque ">
            <div className="boxprincipalConvidadoDestaque font-white krona-one-regular bgImagemPgPalestrantes">
              <div className="sc-mgem-16 ">
                <span className="sc-fz-24 ">8 e 9 de Novembro | São Paulo</span>
                <h2 className="sc-fz-48 ">
                  CONHEÇA OS PALESTRANTES DA EDIÇÃO 2024
                </h2>
              </div>
              <div className="sc-gap-8 container-btn">
                <BtnIngresso url="https://satsconf.vercel.app/ingressos" onClick={() =>{
            cookie.set("btn_lp_global-buy", "btn_55117878", {
              httpOnly: true,
              secure: process.env.NODE_ENV === 'production',
              sameSite: 'strict'
            })
          }}>
                  COMPRAR INGRESSO
                </BtnIngresso>
                {/* botão do container principal */}
                <BtnNovidades onClick={handleOpenModal}>
                  RECEBER NOVIDADES
                </BtnNovidades>
              </div>
            </div>
            <div>
              <Card />
              
            </div>
            <div className="container-btn-palestrantes padding-bottom-60 btnContainerConvidadosPalestrantes">
            <BtnNovidades >Mais palestrantes em breve!</BtnNovidades>
            </div>
         
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Palestrantes;
