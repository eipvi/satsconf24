"use client";
import "animate.css";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";

import { useState, useEffect } from "react";

const BoxSobre = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);

  useEffect(() => {
    // Define o primeiro item como selecionado inicialmente quando a página é carregada
    setSelectedIcon(0);
  }, []);

  const toggle = (i) => {
    setSelectedIcon(selectedIcon === i ? null : i);
  };

  return (
    <section className="bgContainerSobre">
      <div className="font-white boxprincipalSobre">
        <div className="block animate__animated animate__fadeInLeftBig">
          <h2 className="sc-fz-18">SOBRE A SATSCONF</h2>

          {data.map((item, i) => {
            return (
              <div className="item" key={i}>
                <div className="title" onClick={() => toggle(i)}>
                  <h3>{item.question}</h3>
                  <span className="icon-wrapper">
                    {selectedIcon === i ? (
                      <FiMinusCircle className="icon" />
                    ) : (
                      <FiPlusCircle className="icon" />
                    )}
                  </span>
                </div>
                <div className={`content ${selectedIcon === i ? "open" : ""}`}>
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>
        <div className="containerVideo">
          <img src="/video.png" width="314" height="287" alt="" />
        </div>
      </div>
    </section>
  );
};

const data = [
  {
    question: "O que é a Satsconf?",
    answer:
      "A Satsconf é um evento que reúne as maiores referências nacionais e internacionais do Bitcoin para compartilhar conhecimento sobre liberdade, soberania individual e a internet do dinheiro.",
  },
  {
    question: "Pra quem é?",
    answer:
      "A Satsconf é um evento feito para todos aqueles que têm interesse em aprender mais sobre o Bitcoin, se conectar com a comunidade e explorar temas como liberdade, soberania individual e a evolução da internet do dinheiro. É uma oportunidade única de absorver conhecimento de especialistas nacionais e internacionais, além de estabelecer conexões valiosas para o seu crescimento pessoal e profissional.",
  },
  {
    question: "Por que ir à Satsconf?",
    answer:
      "Ir à Satsconf é entrar em um universo vibrante do Bitcoin, com especialistas e entusiastas. Lá, você expande seu conhecimento sobre o ativo, explora as tendências mais recentes e contribui para o futuro financeiro digital. É o ponto de encontro ideal para networking, conexões valiosas e inspiração em finanças descentralizadas. Se quer atualização, networking e imersão na comunidade Bitcoin, a Satsconf é o lugar.",
  },
];

export default BoxSobre;
