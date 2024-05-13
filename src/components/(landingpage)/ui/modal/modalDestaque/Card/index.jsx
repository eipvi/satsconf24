//card

"use client";

import { useState } from "react";
import ModalPalestrantes from "@/components/(landingpage)/ui/modal/modalDestaque/ModalPalestrantes";


const Card = ({ id, name, skills, description, image, twitter, linkedin, className }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className={`card ${className}`}>
          <div className="bgContainerConvidadosDestaque">
      <div className="boxBlocoConvidados">
        <div className="ContainerImagemConvidadosDestaque">
          {/* imagem um */}

          <div
            className="containerConvidadosDestaque "
            onClick={() => {
              setShowModal(true);
            }}
          >
            <div className="number" id={id}></div>

            <img src={image} alt="" className="imageConvidados" />
            <div className="containerImagesBoxDestaque">
              <h3>{name}</h3>
              <span>{skills}</span>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <ModalPalestrantes
          name={name}
          description={description}
          image={image}
          twitter={twitter}
          linkedin={linkedin}
          handleClose={handleClose}
        />
      )}
    </div>
    </div>

  );
};

export default Card;
