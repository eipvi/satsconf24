"use client";

import { IoMdAdd, IoMdClose } from "react-icons/io";
import { useState } from "react";

const FAQqueromeenvolver = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleItem = (index) => {
    setSelectedItem(selectedItem === index ? null : index);
  };

  return (
    <section className="faqContainer" id="faq">
      <div className="boxTitle">
        <h2 className="containerTitleFaq">Quero me envolver</h2>
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
      "Como posso patrocinar a Satsconf 2024?",
    answer:(
    <>
    <p>Para mais informações sobre patrocínio, por favor entre em contato com info@satsconf.com.br ou preencha o formulário de contato utilizando o e-mail da sua empresa. </p>
    </>
    ),
  },
  {
    question: "Existem oportunidades para se tornar um afiliado ou voluntário?",
    answer:(
    <>
    <p>Sim! Se você tem uma grande comunidade ou muitos seguidores e gostaria de ajudar a promover o evento (e até mesmo ganhar uma comissão por isso), adoraríamos ouvir de você. Também temos oportunidades para voluntários durante o evento. Entre em contato conosco em info@satsconf.com.br ou preencha o formulário de contato em nosso site.</p>
    </>
    ),
  },
  {
    question:
      "Tenho produtos relacionados com Bitcoin e gostaria de vendê-los no evento",
    answer:(
    <>
    <p>Ótimo! Teremos uma área de convivência com food trucks e lojas onde serão vendidos produtos com pagamentos em Bitcoin. Se você gostaria de vender seus produtos no evento, entre em contato conosco em info@satsconf.com.br ou preencha o formulário de contato em nosso site.</p>
    </>
    ),
  },
  {
    question:
      "Posso me inscrever para ser palestrante da Satsconf?",
    answer:
    (
    <>
    <p>Na Satsconf, nós nos orgulhamos de apresentar palestrantes relevantes e influentes da comunidade Bitcoin. Nossa equipe de curadoria está sempre em busca de novas vozes e perspectivas. Portanto, se você tem interesse em compartilhar seu conhecimento e experiências, gostaríamos de ouvir de você! Envie um e-mail para info@satsconf.com.br com uma mini-bio e o tópico que gostaria de abordar. Nossa equipe avaliará sua proposta e, caso haja espaço disponível, poderá convidá-lo para palestrar na Satsconf 2024.</p>
    </>
    ),
  },
  {
    question:
      "Quero organizar um evento SATélite da Satsconf",
    answer:
    (
    <>
    <p>Isso é ótimo! Adoramos ver a comunidade se envolver e contribuir para a causa de bitcoinizar o Brasil. Envie um e-mail para info@satsconf.com.br com todos os detalhes do seu evento, incluindo nome, temática, data, hora, local e uma imagem para a divulgação. Não se esqueça de incluir informações sobre os organizadores do evento. Estamos ansiosos para ajudar a amplificar o alcance do seu evento!</p>
    </>
    ),
  },
  {
    question:
      "Sou jornalista/produtor de conteúdo e gostaria de fazer uma cobertura do evento",
    answer:
    (
    <>
    <p>Nós adoramos e valorizamos o trabalho de jornalistas e produtores de conteúdo, e acreditamos que a cobertura do evento é uma ótima maneira de expandir o alcance das informações e discussões que acontecem na Satsconf. Se você está interessado em cobrir a Satsconf 2024, entre em contato conosco pelo e-mail info@satsconf.com.br.</p>
    <br />
    <p>Por favor, inclua no e-mail: Seu nome completo; A publicação/empresa para a qual você está trabalhando; Informações sobre o tipo de cobertura que você planeja fazer (por exemplo, se é uma reportagem, entrevista, live no Instagram, etc.); </p>
    <br />
    <p>Nós avaliaremos o seu pedido e entraremos em contato o mais rápido possível com mais informações e para discutir como podemos facilitar a sua cobertura da Satsconf. Agradecemos o seu interesse e esperamos trabalhar juntos para aumentar a conscientização sobre o Bitcoin e o seu impacto no mundo.</p>
    </>
    ),
  },
];

export default FAQqueromeenvolver;
