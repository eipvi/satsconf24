"use client";

import Link from "next/link";
import { FiCheckCircle } from "react-icons/fi";
import MeuComponenteLogo from "@/components/(landingpage)/images/MeuComponenteLogo";
import MeuComponenteIgressoVip from "@/components/(landingpage)/images/ImageLogoVip";
import BtnCronograma from "@/components/(landingpage)/ui/button/BtnCronograma";
// import BtnCronogramaSecundary from "../../ui/button/BtnCronogramaSecundary/inde";
import BoxCronograma from "../boxcronograma";

const BoxGarante = () => {
  return (
    <section className="backgroundTop" id="programacao">
      <div className="bgContainerGarante font-white">
        <h2 className="krona-one-regular sc-fz-36 boxTitle">
          Garanta seu ingresso agora mesmo!
        </h2>
        <div className="boxGarante">
          <div className="boxItem boxColorPrimary">
            <span className="krona-one-regular ">8 e 9 de NOVEMBRO</span>
            <div className="boxLogoGarante imagensLogoConatinerSite">
              <MeuComponenteLogo />
            </div>

            <ul className="boxListGarante">
              <li>
                <div className="icon-garante">
                  <FiCheckCircle color="white" />
                </div>
                <p>Acesso aos 2 dias de evento principal</p>
              </li>
              <li>
                <div className="icon-garante">
                  <FiCheckCircle color="white" />
                </div>
                <p> Acesso ao Palco Satoshi Nakamoto</p>
              </li>
              <li>
                <div className="icon-garante">
                  <FiCheckCircle color="white" />
                </div>
                <p>Acesso ao Palco do Hal Finney</p>
              </li>
              <li>
                <div className="icon-garante">
                  <FiCheckCircle color="white" />
                </div>
                <p>Acesso às Salas de Workshop</p>
              </li>
              <li>
                <div className="icon-garante">
                  <FiCheckCircle color="white" />
                </div>
                <p>Acesso à Área de Exposição</p>
              </li>
              <li>
                <div className="icon-garante">
                  <FiCheckCircle color="white" />
                </div>
                <p>Acesso à SatsKids, SatsGaming, SatsArte e SatsMarket</p>
              </li>
            </ul>
            <div className="containerbtnHome marginBottonHomeCronograma">
              <BtnCronograma url="https://www.satsconf.com.br/ingressos">
                {" "}
                COMPRAR INGRESSO AGORA
              </BtnCronograma>
            </div>
          </div>

          <div className="boxItem boxColorSecundary">
            <span className="krona-one-regular ">8 a 10 de NOVEMBRO </span>
            <div className="boxLogoGarante imagensLogoConatinerSite">
              <MeuComponenteIgressoVip />
            </div>

            <ul className="boxListGarante">
              <li>
                <div className="icon-garante">
                  <FiCheckCircle color="white" />
                </div>

                <p style={{ fontWeight: 'bold' }}>Todos os acessos do Ingresso Normal</p>
              </li>
              <li>
                <div className="icon-garante">
                  <FiCheckCircle color="white" />
                </div>
                <p>Entrada especial no evento</p>
              </li>
              <li>
                <div className="icon-garante">
                  <FiCheckCircle color="white" />
                </div>
                <p>
                Acesso aos assentos VIP dos palcos
                </p>
              </li>
              <li>
                <div className="icon-garante">
                  <FiCheckCircle color="white" />
                </div>
                <p>Acesso à Área VIP com comidas e bebidas</p>
              </li>
              <li>
                <div className="icon-garante">
                  <FiCheckCircle color="white" />
                </div>
                <p>Acesso privilegiado aos palestrantes</p>
              </li>
              <li>
                <div className="icon-garante">
                  <FiCheckCircle color="white" />
                </div>
                <p>Acesso à SatsParty (open bar e open food)</p>
              </li>{" "}
            </ul>

            <div className="containerbtnHome marginBottonHomeCronograma">
              <BtnCronograma url="https://satsconf24.vercel.app/ingressos">
                {" "}
                COMPRAR INGRESSO AGORA{" "}
              </BtnCronograma>
            </div>
          </div>
        </div>
        <BoxCronograma />
      </div>
    </section>
  );
};

export default BoxGarante;
