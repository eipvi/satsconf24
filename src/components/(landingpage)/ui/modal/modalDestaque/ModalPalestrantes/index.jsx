import Link from "next/link";
import { RiTwitterXFill, RiLinkedinFill, RiInstagramLine, RiYoutubeFill, RiGithubFill } from "react-icons/ri";
import IconNostr from "../../../icon/nostr";
import { FiLink } from "react-icons/fi";

//modal conteúdo -itens p. modal
const ModalPalestrantes = ({
  name,
  description,
  handleClose,
  image,
  twitter,
  link,
  linkedin,
  nostr,
  instagram,
  youtube,
  github,
  
}) => {
  return (
    <div className="bgModalPalestrantes" id="modal">
      <div className="modalContentPalestrantes">
        <div className="modal-body">
          <img src={image} alt={name} />
        </div>
        <div className="modal-header">
          <div className="modal-header-exit">
            <button className="modal-close-btn" onClick={() => handleClose()}>
              X
            </button>
          </div>

          <h2>{name}</h2>

          <p>{description}</p>
          <Link href="https://www.satsconf.com.br/ingressos">
            <button className="btnComprarModal">Comprar Ingresso</button>
          </Link>

          <div className="social-icons-modal">
            {twitter && (
              <a href={twitter}>
                <RiTwitterXFill size={20}/>
              </a>
            )}
            {link && (
              <a href={link}>
                <FiLink size={20}/>
              </a>
            )}
            {linkedin && (
              <a href={linkedin}>
                <RiLinkedinFill size={20} />
              </a>
            )}
              {nostr && (
              <a href={nostr}>
               <IconNostr />
              </a>
            )}
             {instagram && (
              <a href={instagram}>
               <RiInstagramLine size={20} />
              </a>
            )}
             {youtube && (
              <a href={youtube}>
              <RiYoutubeFill size={20} />
              </a>
            )}
             {github && (
              <a href={github}>
               <RiGithubFill size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPalestrantes;
