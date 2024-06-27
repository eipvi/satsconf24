"use client"
import React from "react";

import { i18n } from "@/translate/i18n";
//modal formulario
import { useContext } from "react";
import { ModalContext } from "@/providers/ModalContext";

import MeuComponenteEvento from "@/components/(landingpage)/images/MeuComponenteEvento/index.jsx";
import BtnIngresso from "@/components/(landingpage)/ui/button/BtnIngresso/index.jsx";
import BtnNovidades from "@/components/(landingpage)/ui/button/BtnNovidades/index.jsx";

const BoxPrincipal = () => {

  const {handleModalVisible} = useContext(ModalContext);

  const handleOpenModal= ()=>{
    handleModalVisible();
  };

  return (
    <section id="BoxPrincipal">
      <div className="bgContainerImg">
        <div className="bgContainerPrincipal">
          <div className=" bgContainerMargin ">
            <div className="boxprincipal">
              {/* caixa co container com fonte do titulo */}
              <div className="sc-bg-container krona-one-regular ">
                <span>{i18n.t('data.app')}</span>
                <h1>{i18n.t('titles.itWorks')}</h1>
                {/* gap de 16 com container de botão */}
                <div className="sc-gap-16 container-btn">
                  <BtnIngresso url="https://satsconf.vercel.app/ingressos">{i18n.t('buttons.purchase')}</BtnIngresso>
                  {/* botão do container principal */}
                  <BtnNovidades onClick={handleOpenModal}>{i18n.t('buttons.news')}</BtnNovidades>
                </div>
              </div>

              <div className="btningresso-img container-com-gradiente ">
                {/* imagem do container principal esportado como componente */}
                <MeuComponenteEvento />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BoxPrincipal;
