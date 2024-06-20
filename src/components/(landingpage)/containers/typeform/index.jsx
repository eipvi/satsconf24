import React from "react";

const TypeformEmbed = () => {
  const containerStyle = {
    width: "100%",
    height: "auto", // ajuste a altura conforme necessário
    overflow: "hidden",
  };

  return (
    <div
      style={containerStyle}
      dangerouslySetInnerHTML={{
        __html: `<div data-tf-live="01J0VA4X2Q100BVG8A52KZ9EFS"></div><script src="//embed.typeform.com/next/embed.js"></script>`,
      }}
    />
  );
};

export default TypeformEmbed;
