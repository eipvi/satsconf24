import FAQcontato from "@/components/(landingpage)/containers/faq/facontato";
import TypeformEmbed from "@/components/(landingpage)/containers/typeform";
import ImageContato from "@/components/(landingpage)/images/ImageContato";

const Contato = ({ children }) => {
  return (
    <section id="Contato">
      {/* Aqui é onde você renderiza children */}
      {children}
      <div className="bgContainerImgFaq">
        <div className="bgContainerPrincipal">
          <div className=" bgContainerMargin ">
            <div className="boxprincipal">
              {/* caixa co container com fonte do titulo */}
              <div className="sc-bg-container krona-one-regular ">
                <h1>ENTRE EM CONTATO</h1>
                {/* gap de 16 com container de botão */}
              </div>

              <div className="btningresso-img container-com-gradiente">
                {/* imagem do container principal esportado como componente */}
                <ImageContato />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="boxTitle">
            {" "}
            <h2 className=" containerTitleForm">
              Preencha o formulário abaixo para entrar em contato com um
              representante: 
            </h2>

          </div>
          <TypeformEmbed />
          <FAQcontato />
        </div>
      </div>
    </section>
  );
};

export default Contato;
