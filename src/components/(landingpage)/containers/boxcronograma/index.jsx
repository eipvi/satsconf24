import "animate.css";
import SatsConf from "@/components/(landingpage)/images/MeuComponenteSatsConf";
import SatsParty from "@/components/(landingpage)/images/Satsparty/logoSatsParty";
import SatsWeek from "@/components/(landingpage)/images/satsweek";

const BoxCronograma = () => {
  return (
    <section className="bgContainerCronograma">
      {/* componente cronograma */}
      <h3 className="krona-one-regular sc-fz-36 boxTitle">
        Cronograma SATSCONF 2024
      </h3>
      <div className="boxCronograma">
        <div className="boxItemCronograma animate__animated animate__zoomIn">
          <h4>Durante a Semana</h4>
          <div className="imageCronograma ">
            <SatsConf />
          </div>
          <p>
            Palestras, painéis, workshops, competições, jogos, networking,
            comidas, bebidas, lojas e muito mais.
          </p>
          <span className="krona-one-regular ">Audio | São Paulo</span>
        </div>
        <div className="boxItemCronograma animate__animated animate__zoomIn">
          <h4>Durante a Semana</h4>
          <div className="imageCronograma">
            <SatsParty />
          </div>

          <p>
            Uma festa exclusiva para os VIPs com ótima comida e networking com
            palestrantes e influenciadores.
          </p>
          <span className="krona-one-regular ">Local Secreto </span>
        </div>
        <div className="boxItemCronograma animate__animated animate__zoomIn">
          <h4>Durante a Semana</h4>
          <div className="imageCronograma">
            <SatsWeek />
          </div>

          <p>
            Uma semana inteira com vários tipos de eventos, encontros, festas e
            celebrações da comunidade bitcoiner.
          </p>
          <span className="krona-one-regular ">Por toda São Paulo</span>
        </div>
      </div>
    </section>
  );
};

export default BoxCronograma;
