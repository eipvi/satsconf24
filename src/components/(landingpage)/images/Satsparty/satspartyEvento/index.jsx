import Link from "next/link";
import BtnIngresso from "@/components/(landingpage)/ui/button/BtnIngresso";


const SatsPartyImgEvento = () => {
  return (
    <div className="BoxSatsParty">
      <div className="ContainerSatsPartyEvento">
        <div className="gallerySatsParty  ">
          <div className="gallery">
            <img src="/satsconf2023/comprar-ingresso-satsconf.jpg" className="galleryImg" alt="Image 1" />
            <img src="/satsconf2023/satsconf-evento-brasil.png" className="galleryImg" alt="Image 1" />
            <img src="/satsconf2023/satsconf2023-em-sao-paulo.jpg" className="galleryImg" alt="Image 1" />
            <img src="/satsconf2023/enceramento-sats-conf-evento-btc.jpg" className="galleryImg" alt="Image 1" />
            <img src="/satsconf2023/sats-conf-evento-palestra-bitcoin.jpg" className="galleryImg" alt="Image 1" />
            <img src="/satsconf2023/festa-encerramento-satsconf.jpg"className="galleryImg" alt="Image 1" />
            <img src="/satsconf2023/evento-sats-conf.jpg" className="galleryImg" alt="Image 1" />
            <img src="/satsconf2023/evento-bitcoin-sp-brazil.jpg" className="galleryImg" alt="Image 1" />
            <img src="/satsconf2023/sao-paulo-evento-btc-sastconferencia.png" className="galleryImg" alt="Image 1" />
            <img src="/satsconf2023/palestra-evento-workshop-satsconf.jpg" className="galleryImg" alt="Image 1" />
            <img src="/satsconf2023/satsconf-2023.png" className="galleryImg" alt="Image 1" />
            <img src="/satsconf2023/conferencia-bitcoin-brazil.jpg" className="galleryImg" alt="Image 1" />


          </div>
        </div>
        <div className=" img16 itemSatsPartyEvento ">
          <div className="container-div-bottom-satsparty">
            <h4>
              FAÇA PARTE DESSE MOMENTO NESTA EDIÇÃO, GARANTA AGORA SEU INGRESSO
              VIP
            </h4>
            <div className="container-btn-satsparty">
              <BtnIngresso url="https://satsconf24.vercel.app/ingressos">COMPRAR SEU INGRESSO VIP AGORA </BtnIngresso>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SatsPartyImgEvento;
