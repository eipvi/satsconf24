import dynamic from "next/dynamic"; // Importa a função dynamic do Next.js

const BtnBeneficios = dynamic(() =>
  import("@/components/(landingpage)/ui/button/BtnBeneficios/index.jsx")
); // Lazy loading do componente BtnBeneficios

const BoxBeneficios = () => {
  const renderizarBotoes = (quantidade) => {
    const botoes = [];
    for (let i = 0; i < quantidade; i++) {
      botoes.push(<BtnBeneficios key={`btn-1-${i}`}>Lightning Network</BtnBeneficios>);
      botoes.push(<BtnBeneficios key={`btn-2-${i}`}>E-cash</BtnBeneficios>);
      botoes.push(<BtnBeneficios key={`btn-3-${i}`}>Bitcoin</BtnBeneficios>);
      botoes.push(<BtnBeneficios key={`btn-4-${i}`}>Cypherpunks</BtnBeneficios>);
      botoes.push(<BtnBeneficios key={`btn-5-${i}`}>Mineração</BtnBeneficios>);
      botoes.push(<BtnBeneficios key={`btn-6-${i}`}>Bitcoin</BtnBeneficios>);
      botoes.push(<BtnBeneficios key={`btn-7-${i}`}>Freedom Money</BtnBeneficios>);
      botoes.push(<BtnBeneficios key={`btn-8-${i}`}>Nostr</BtnBeneficios>);
      botoes.push(<BtnBeneficios key={`btn-9-${i}`}>Bitcoin</BtnBeneficios>);
      botoes.push(<BtnBeneficios key={`btn-10-${i}`}>Networking</BtnBeneficios>);
    }
    return botoes;
  };

  return (
    <section className="containerCentralizadoBeneficios">
      <div className="bgContainerBeneficios">
        <div className="containerBotoes sc-flex-center font-white sc-gap-32">
          {[...Array(1)].map((_, index) => (
            <div
              key={`linha-1-${index}`}
              className="linhaBotoes sc-flex-center font-white sc-gap-32"
            >
              {renderizarBotoes(4)}
            </div>
          ))}
        </div>
        <div className="containerBotoes font-white sc-gap-32">
          {[...Array(1)].map((_, index) => (
            <div
              key={`linha-2-${index}`}
              className="linhaBotoes sc-flex-center font-white sc-gap-32"
            >
              {renderizarBotoes(4)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoxBeneficios;
