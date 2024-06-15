"use client";
import React, { useState, useContext } from "react"; //Dentro do ModalNovidades, os hooks useState são utilizados para gerenciar os estados locais do formulário (name, email, number).
import { ModalContext } from "@/providers/ModalContext";
import { useDados } from "@/providers/DadosContext";

//O ModalNovidades é renderizado condicionalmente pelo ModalProvider com base no estado visible.
const ModalNovidades = ({ user }) => {
  const { handleModalVisible } = useContext(ModalContext);
  const { dados, addDados } = useDados();

  {
    /* Manipulação de state formulario */
  }
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [number, setNumber] = useState(user ? user.number : "");
  const [error, setError] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleNumber = (e) => {
    setNumber(e.target.value);
  };

  // console.log(name);
  // console.log(email);
  // console.log(number);

  {
    /* Envio de formulario */
  }
  //Quando o usuário submete o formulário, a função handleSubmit é chamada.
  //A função handleSubmit previne o comportamento padrão do formulário (recarregar a página) utilizando e.preventDefault().
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    console.log("ENVIANDO O FORMULARIO");
    //Dentro de handleSubmit, os valores dos campos do formulário são lidos dos estados locais (name, email, number) e agrupados em um objeto newProduct.
    const newDados = { name, email, number };

    try {
      // Usar apenas addDados para enviar os dados
      await addDados(newDados);
      setName("");
      setEmail("");
      setNumber("");
      console.log("Dados enviados com sucesso");
    } catch (error) {
      setError("Erro ao enviar dados");
      console.log(error);
    }
  };

  /* Controlando inputs */

  return (
    <section id="bgModalNovidades" onSubmit={handleSubmit}>
      {/* Renderizar o modal somente se showModal for verdadeiro */}

      <div className="modalNovidades">
        <div className="containerModalNovidades">
          <div className="headerformulario">
            <div>
              <img src="./novidades-sobre-bitcoin.png" />
            </div>
            <div className="krona-one-regular">
              <h2>RECEBER NOVIDADES</h2>
            </div>
            <div className="modal-header-exit-ingresso">
              <button onClick={handleModalVisible}>x</button>
            </div>
          </div>
          <div className="containerFormulario ">
            <h3>
              Fique por dentro de todas as novidades da{" "}
              <strong>SatsConf 2024</strong>{" "}
            </h3>
            <form className="formBox">
              <div className="">
                <label htmlFor="name">Seu nome completo</label>
                {/* O usuário interage com o formulário preenchendo os campos de nome, email e telefone.-Cada campo do formulário está ligado a um estado local que é atualizado através das funções handleName, handleEmail e handleNumber. */}
                <input
                  type="text"
                  name="name"
                  placeholder="Insira seu nome aqui"
                  onChange={handleName}
                  value={name}
                />

                <label htmlFor="email">Seu melhor e-mail</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Insira seu email aqui"
                  onChange={handleEmail}
                  value={email}
                />

                <label htmlFor="number">Seu Whatsapp</label>
                <input
                  type="tel"
                  name="number"
                  placeholder="Insira seu telefone com DDD"
                  onChange={handleNumber}
                  value={number}
                />
              </div>
              <button type="submit">SE INSCREVER PARA RECEBER NOVIDADES</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModalNovidades;
