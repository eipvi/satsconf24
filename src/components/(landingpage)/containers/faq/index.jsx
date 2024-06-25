"use client";

import { IoMdAdd, IoMdClose } from "react-icons/io";
import { useState } from "react";

const FAQComponent = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleItem = (index) => {
    setSelectedItem(selectedItem === index ? null : index);
  };

  return (
    <section className="faqContainer" id="faq">
      <div className="boxTitle">
        <h2 className="containerTitleFaq">FAQ</h2>
      </div>
      {data.map((item, index) => (
        <div className={`faqItem ${selectedItem === index ? 'open' : ''}`} key={index}>
          <div className="faqHeader" onClick={() => toggleItem(index)}>
            <div className="title">
              <span className="faqNumber" id={`faq-${index}`}>
                {index + 1}
              </span>
              <h3 className="faqQuestion">{item.question}</h3>
              <span className={`faqToggle ${selectedItem === index ? 'open-icon' : ''}`}>
                {selectedItem === index ? (
                  <IoMdClose className="icon" />
                ) : (
                  <IoMdAdd className="icon" />
                )}
              </span>
            </div>
            <div className="faqAnswer" style={{ display: selectedItem === index ? "block" : "none" }}>
               {item.answer}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

const data = [
  {
    question:
      "O que é a Satsconf?",
    answer:(
    <>
    <p>A Satsconf é uma conferência anual realizada em São Paulo que reúne as maiores referências nacionais e internacionais do Bitcoin. Com palestras, workshops, painéis de discussão e momentos para networking, nosso objetivo é compartilhar conhecimento sobre liberdade, soberania individual e a internet do dinheiro. Nosso público abrange desde iniciantes que querem aprender mais sobre Bitcoin até veteranos no assunto. A cada ano, procuramos trazer palestrantes especialistas e líderes de opinião da comunidade Bitcoin, bem como estabelecer parcerias com organizações influentes na indústria. Se você acredita no poder de transformação do Bitcoin, a Satsconf é feita para você.</p>
    </>
    ),
  },
  {
    question: "Quem está por trás da Satsconf?",
    answer:(
    <>
    <p> A Satsconf foi concebida e é organizada por Lucas Ferreira, evangelista na Lightning Labs, onde ele ajuda empresas, projetos e desenvolvedores a desenvolver soluções com a Lightning Network e apoia iniciativas que fortalecem a comunidade Bitcoin. Ele também é co-fundador e diretor executivo da Vinteum, uma organização sem fins lucrativos dedicada à pesquisa, desenvolvimento e educação de desenvolvedores de Bitcoin no Brasil.</p>
    <br/>
    <p> Desde a primeira edição da Satsconf, a Pure Soul Eventos tem sido uma parceira inestimável na organização do evento.</p>
    </>
    ),
  },
  {
    question:
      "O evento será em em que língua?",
    answer:(
    <>
    <p>A Satsconf é um evento internacional, mas destinado principalmente ao público brasileiro. As palestras e painéis são conduzidos principalmente em português, mas também podem ser em inglês ou ocasionalmente em espanhol/portunhol. Para assegurar que todos possam aproveitar ao máximo o evento, oferecemos tradução simultânea de inglês para português.</p>
    <br/>
    <p>Queremos salientar que estrangeiros são absolutamente bem-vindos na Satsconf. Muitos participantes falam inglês ou espanhol e estão ansiosos para estabelecer conexões mais estreitas entre as comunidades bitcoiner brasileira e internacional. Portanto, se você é um falante não-nativo de português, não hesite em participar - a Satsconf é um evento para todos os entusiastas do Bitcoin, independentemente de sua origem ou idioma.</p>
    </>
    ),
  },
  {
    question:
      "Quais ativos serão tratados na Satsconf?",
    answer:
    (
    <>
    <p>Esse evento é 100% sobre Bitcoin e não sobre “criptomoedas”. Apenas Bitcoin. Por favor, foque no tema do evento e guarde discussões sobre “criptoativos” para outros eventos. NFTs, DeFi, “Blockchain” não são temas deste evento.</p>
    </>
    ),
  },
];

export default FAQComponent;
