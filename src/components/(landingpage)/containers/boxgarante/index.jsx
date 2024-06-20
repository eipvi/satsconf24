"use client";

import Link from "next/link";
import { FiCheckCircle } from "react-icons/fi";
import MeuComponenteLogo from "@/components/(landingpage)/images/MeuComponenteLogo";
import MeuComponenteIgressoVip from "@/components/(landingpage)/images/ImageLogoVip";
import BtnCronograma from "@/components/(landingpage)/ui/button/BtnCronograma";
import BtnCronogramaSecundary from "../../ui/button/BtnCronogramaSecundary/inde";

const BoxGarante = () => {
  return (
    <section className="backgroundTop" id="programacao">
      <div className="bgContainerGarante font-white">
        <h2 className="krona-one-regular sc-fz-36 boxTitle">
          Garante seu ingresso agora mesmo!
        </h2>
        <div className="boxGarante">
          <div className="boxItem boxColorPrimary">
            <span className="krona-one-regular ">2 A 4 NOVEMBRO</span>
            <div className="boxLogoGarante imagensLogoConatinerSite">
              <MeuComponenteLogo />
            </div>

            <ul className="boxListGarante">
              <li>
                <FiCheckCircle size={38} color="white" /> Acesso ao Palco
                Nakamoto
              </li>
              <li>
                <FiCheckCircle size={38} color="white" /> Acesso ao Palco Hal
                Finney
              </li>
              <li>
                <FiCheckCircle size={38} color="white" /> Acesso às salas de
                Workshop
              </li>
              <li>
                <FiCheckCircle size={38} color="white" /> Acesso à Área de
                Exposição
              </li>
            </ul>
            <div className="containerbtnHome marginBottonHomeCronograma">
              <BtnCronograma url=""> ESGOTADO</BtnCronograma>
            </div>
          </div>

          <div className="boxItemTwo boxColorSecundary">
            <span className="krona-one-regular ">2 A 6 NOVEMBRO</span>
            <div className="boxLogoGarante imagensLogoConatinerSite">
              <MeuComponenteIgressoVip />
            </div>

            <ul className="boxListGarante">
              <li>
                <FiCheckCircle size={38} color="white" />
                <p>Acesso ao Palco Nakamoto </p>
              </li>
              <li>
                <FiCheckCircle size={38} color="white" />
                <p>Acesso ao Palco Hal Finney</p>
              </li>
              <li>
                <FiCheckCircle size={38} color="white" />
                <p>Acesso às salas de Workshop</p>
              </li>
              <li>
                <FiCheckCircle size={38} color="white" />
                <p> Acesso à Área de Exposição</p>
              </li>
              <li>
                <FiCheckCircle size={38} color="white" />
                <p>Entrada especial no evento</p>
              </li>
              <li>
                <FiCheckCircle size={38} color="white" />
                <p>Assentos VIP na plateia de todas as palestras*</p>
              </li>{" "}
              <li>
                <FiCheckCircle size={38} color="white" />
                <p>Bitcoffe Break com café e snacks**</p>
              </li>
              <li>
                <FiCheckCircle size={38} color="white" />
                <p> Espaço VIP com benefícios e surpresas</p>
              </li>
              <li>
                <FiCheckCircle size={38} color="white" />
                <p> Acesso privilegiado aos palestrantes</p>
              </li>
              <li>
                <FiCheckCircle size={38} color="white" />
                <p>Acesso a SATSPARTY open bar e open food</p>
              </li>
            </ul>
            <div className="boxListGaranteInfo">
              <p>*Números de assentos VIP limitados e sujeito a alteração.</p>
            </div>
            <div className="containerbtnHome marginBottonHomeCronogramaTwo">
              <BtnCronogramaSecundary url="https://satsconf24.vercel.app/ingressos">
                {" "}
                COMPRAR INGRESSO AGORA{" "}
              </BtnCronogramaSecundary>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoxGarante;
