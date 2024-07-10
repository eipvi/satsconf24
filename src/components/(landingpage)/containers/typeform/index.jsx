"use client";
import React, { useEffect } from "react";

const TypeformEmbed = () => {
  const containerStyle = {
    width: "80%",
    minHeight: "100vh", // ajuste a altura conforme necessário
    overflow: "hidden",
    margin: "auto",
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      style={containerStyle}
      dangerouslySetInnerHTML={{
        __html: `<div data-tf-live="01J2ESC3G61XF283BT6J79ZR80"></div>`,
      }}
    />
  );
};

export default TypeformEmbed;
