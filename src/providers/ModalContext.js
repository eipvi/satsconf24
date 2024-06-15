//src/providers/ModalContext.js
import React, { createContext, useState } from "react";
import ModalNovidades from "@/components/(landingpage)/ui/modal/modalNovidades";

//O ModalContext contém um estado (visible) e uma função (handleModalVisible) para controlar a visibilidade do modal.
export const ModalContext = createContext({
  visible: false,
  handleModalVisible: () => {},
});
//O ModalProvider é utilizado no RootLayout para prover o contexto do modal a todos os componentes filhos.
export const ModalProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);

  function handleModalVisible() {
    setVisible(!visible);
  }

  return (
    <ModalContext.Provider value={{ visible, handleModalVisible }}>
      {visible && <ModalNovidades />}
      {children}
    </ModalContext.Provider>
  );
};
