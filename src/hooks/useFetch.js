import { useState } from "react";

const useFetch = () => {
  const [dados, setDados] = useState([]);

  const addDados = async (novoDado) => {
    try {
      const response = await fetch("https://bc-formulario.vercel.app/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoDado),
      });

      const result = await response.json();
      if (!result.error) {
        setDados((prevDados) => [...prevDados, novoDado]);
        console.log("Dados enviados com sucesso:", result);
      } else {
        console.error("Erro ao enviar dados:", result.message);
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  return { dados, setDados, addDados };
};

export default useFetch;
