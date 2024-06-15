// context/DadosContext.js
import React, { createContext, useContext } from 'react';
import useFetch from '@/hooks/useFetch';

const DadosContext = createContext();

export const DadosProvider = ({ children }) => {
  const { dados, addDados } = useFetch();

  return (
    <DadosContext.Provider value={{ dados, addDados }}>
      {children}
    </DadosContext.Provider>
  );
};

export const useDados = () => useContext(DadosContext);
