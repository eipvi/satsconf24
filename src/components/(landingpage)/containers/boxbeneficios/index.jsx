import dynamic from "next/dynamic"; // Importa a função dynamic do Next.js

const BtnBeneficios = dynamic(() =>
  import("@/components/(landingpage)/ui/button/BtnBeneficios/index.jsx")
); // Lazy loading do componente BtnBeneficios

const BoxBeneficios = () => {
  const renderizarBotoes = (quantidade) => {
    const botoes = [];
    for (let i = 0; i < quantidade; i++) {
      botoes.push(<BtnBeneficios key={i}>Lightning Network</BtnBeneficios>);
      botoes.push(<BtnBeneficios key={i + 1}>E-cash</BtnBeneficios>);
      botoes.push(<BtnBeneficios key={i + 4}>Bitcoin</BtnBeneficios>);
      botoes.push(<BtnBeneficios key={i + 1}>Cypherpunks</BtnBeneficios>);
      botoes.push(<BtnBeneficios key={i + 1}>Mineração</BtnBeneficios>);
      botoes.push(<BtnBeneficios key={i + 4}>Bitcoin</BtnBeneficios>);
      botoes.push(<BtnBeneficios key={i + 1}>Freedom Money</BtnBeneficios>);
      botoes.push(<BtnBeneficios key={i + 1}>Nostr</BtnBeneficios>);
      botoes.push(<BtnBeneficios key={i + 4}>Bitcoin</BtnBeneficios>);
      botoes.push(<BtnBeneficios key={i + 1}>Networking</BtnBeneficios>);

    }
    return botoes;
  };

  return (
    <section className="containerCentralizadoBeneficios">
      <div className="bgContainerBeneficios">
        <div className="containerBotoes sc-flex-center font-white sc-gap-32">
          {[...Array(1)].map((_, index) => (
            <div
              key={index}
              className="linhaBotoes sc-flex-center font-white sc-gap-32"
            >
              {renderizarBotoes(4)}
            </div>
          ))}
        </div>
        <div className="containerBotoes font-white sc-gap-32">
          {[...Array(1)].map((_, index) => (
            <div
              key={index}
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
