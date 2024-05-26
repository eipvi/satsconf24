"use client";

import { useEffect } from "react";
import Link from "next/link";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div id="error">
      <div className="containerError">
        <h2>Ops! Algo deu errado!</h2>
        <p>Tente alguns minutos mais tarde.</p>
        <Link href="/">Voltar para home</Link>
      </div>
    </div>
  );
};

export default Error;
