"use client"
import { useState } from 'react';
import CompraBtc from '@/components/(landingpage)/ui/button/Comprar/ingressoBtc';
import CompraReal from '../../button/Comprar/ingressoReal';

const IngressoBtn = () => {
    const [mostrarBTC, setMostrarBTC] = useState(true);

    useState(() => {

         // Definir um atraso de 1 segundo (1000 milissegundos) antes de mostrar o botão BTC
         const timeout = setTimeout(() => {
          setMostrarBTC(true);
      }, 10);
      // Limpar o timeout quando o componente for desmontado
      return () => clearTimeout(timeout);
      },[]);
    
      const handleSelecionarBTC = () => {
        setMostrarBTC(true);
      };

      const handleSelecionarReal = () => {
        setMostrarBTC(false);
      };

    return (
    <div className="boxIngressoComprar">
      <div className="botaoContainerBtcRl">
        <button id='btnBtc' className={mostrarBTC ? 'active' : ''} onClick={handleSelecionarBTC}>Comprar BTC</button>
        <button id='btnReal' className={!mostrarBTC ? 'active' : ''} onClick={handleSelecionarReal}>Comprar em Reais</button>
      </div>
      <div className="conteudoIngresso">
        {mostrarBTC ? (
          <div>      
            < CompraBtc />
          </div>
        ) : (
          <div>
          < CompraReal />
          </div>
        )}
      </div>
    </div>
    );
  };
  
  export default IngressoBtn;