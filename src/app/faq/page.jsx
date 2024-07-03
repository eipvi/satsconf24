import FAQComponent from "@/components/(landingpage)/containers/faq";
import FAQpreparese from "@/components/(landingpage)/containers/faq/faqpreparese";
import FAQqueromeenvolver from "@/components/(landingpage)/containers/faq/faqqueromeenvolver";
import ImageFaq from "@/components/(landingpage)/images/ImageFaq";

const Faq = ({ children }) => {
  return (
    <div id="Faq">
      {/* Aqui é onde você renderiza children */} {children}
      <div className="bgContainerImgFaq ">
        <div className="bgContainerPrincipal ">
          <div className=" bgContainerMargin">
            <div className="boxprincipal">
              {/* caixa co container com fonte do titulo */}
              <div className="sc-bg-container krona-one-regular">
                <h1>TIRE SUAS DÚVIDAS SOBRE A SATSCONF</h1>
                {/* gap de 16 com container de botão */}
              </div>

              <div className="btningresso-img container-com-gradiente">
                {/* imagem do container principal da pagina de ingresso esportado como componente */}
                <ImageFaq />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" krona-one-regular bgContaineImgIgresso">
        <FAQqueromeenvolver />
      </div>
      <div className="krona-one-regular bgContaineImgIgresso">
        <FAQComponent />
      </div>
      <FAQpreparese />
      <div className="boxTitle containerEntrarContato">
        <h2 className="krona-one-regular ">Não encontrou a resposta para sua pergunta?</h2>
        <p className="">
          Entre em contato por e-mail (info@satsconf.com.br), pelo formulário do
          site, ou visite nossos grupos no Telegram ou Whatsapp, <br /> onde alguém da
          organização ou mesmo outro participante do evento podem te ajudar.
        </p>
      </div>
    </div>
  );
};

export default Faq;
