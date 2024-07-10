import BtnIngresso from "@/components/(landingpage)/ui/button/BtnIngresso";
import BtnNovidades from "@/components/(landingpage)/ui/button/BtnNovidades";
import { FiCheckCircle, FiMinus } from "react-icons/fi";
import cookie from "js-cookie";

const BoxTabelaIngresso = () => {
  return (
    <div id="listaIngressoBox" className="backgroundTopIngresso">
      <div className="bgTabelaIngresso">
        <div className="boxTitle krona-one-regular">
          <h2>O QUE ESTÁ INCLUSO</h2>
        </div>
        <table className="BoxTabelaIngresso sora-regular sc-fz-18">
          <thead>
            <tr>
              <th className="bordaNone"></th>
              <th className="boxCenter bordaNone">
                <img
                  src="/ingresso-normal-satsconf.png"
                  alt="ingresso normal satsconf"
                />
              </th>
              <th className="boxCenter bordaNone">
                <img
                  src="/ingresso-vip-satsconf.png"
                  alt="ingresso VIP satsconf"
                />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bordaleft">
                Acesso aos 2 dias de evento principal
              </td>
              <td className="boxCenter">
                {" "}
                <FiCheckCircle size={38} color="white" />{" "}
              </td>
              <td className="boxCenter">
                {" "}
                <FiCheckCircle size={38} color="white" />
              </td>
            </tr>
            <tr>
              <td className="bordaleft">Acesso ao Palco Satoshi Nakamoto </td>
              <td className="boxCenter">
                <FiCheckCircle size={38} color="white" />
              </td>
              <td className="boxCenter">
                {" "}
                <FiCheckCircle size={38} color="white" />
              </td>
            </tr>
            <tr>
              <td className="bordaleft">Acesso às salas de Workshop</td>
              <td className="boxCenter">
                <FiCheckCircle size={38} color="white" />
              </td>
              <td className="boxCenter">
                {" "}
                <FiCheckCircle size={38} color="white" />
              </td>
            </tr>
            <tr>
              <td className="bordaleft">Acesso à Área de Exposição</td>
              <td className="boxCenter">
                <FiCheckCircle size={38} color="white" />
              </td>
              <td className="boxCenter">
                {" "}
                <FiCheckCircle size={38} color="white" />
              </td>
            </tr>
            <tr>
              <td className="bordaleft">
                Acesso à SatsKids, SatsGaming, SatsArte e SatsMarket
              </td>
              <td className="boxCenter">
                <FiCheckCircle size={38} color="white" />
              </td>
              <td className="boxCenter">
                {" "}
                <FiCheckCircle size={38} color="white" />
              </td>
            </tr>
            <tr>
              <td className="bordaleft">
                Entrada especial no evento
              </td>
              <td className="boxCenter">
                <FiMinus size={38} color="white" />
              </td>
              <td className="boxCenter">
                {" "}
                <FiCheckCircle size={38} color="white" />
              </td>
            </tr>
            <tr>
              <td className="bordaleft">
              Acesso aos assentos VIP dos palcos
              </td>
              <td className="boxCenter">
                <FiMinus size={38} color="white" />
              </td>
              <td className="boxCenter">
                {" "}
                <FiCheckCircle size={38} color="white" />
              </td>
            </tr>
            <tr>
              <td className="bordaleft">
                Acesso à Área VIP com comidas e bebidas{" "}
              </td>
              <td className="boxCenter">
                <FiMinus size={38} color="white" />
              </td>
              <td className="boxCenter">
                {" "}
                <FiCheckCircle size={38} color="white" />
              </td>
            </tr>
            <tr>
              <td className="bordaleft">
                Acesso privilegiado aos palestrantes
              </td>
              <td className="boxCenter">
                <FiMinus size={38} color="white" />
              </td>
              <td className="boxCenter">
                {" "}
                <FiCheckCircle size={38} color="white" />
              </td>
            </tr>
            <tr>
              <td className="bordaleft">
                Acesso a SATSPARTY (open bar e open food)
              </td>
              <td className="boxCenter">
                <FiMinus size={38} color="white" />
              </td>
              <td className="boxCenter">
                {" "}
                <FiCheckCircle size={38} color="white" />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="sc-gap-8 containerBtnIngresso">
          <BtnIngresso url="https://satsconf24.vercel.app/ingressos" onClick={() =>{
            cookie.set("btn_lp_global-buy", "btn_55117878", {
              httpOnly: true,
              secure: process.env.NODE_ENV === 'production',
              sameSite: 'strict'
            })
          }}>
            COMPRAR INGRESSO
          </BtnIngresso>
          {/* botão do container principal */}
          <BtnNovidades url="https://chat.whatsapp.com/JLDl4QZwwXb1htqScSJXgq">COMPRAR EM GRUPO</BtnNovidades>
        </div>
      </div>
    </div>
  );
};

export default BoxTabelaIngresso;
