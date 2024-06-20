import BtnIngresso from "@/components/(landingpage)/ui/button/BtnIngresso";
import BtnNovidades from "@/components/(landingpage)/ui/button/BtnNovidades";
import { FiCheckCircle, FiMinus } from "react-icons/fi";

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
            <td className="bordaleft">Acesso a palestras do Palco x</td>
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
            <td className="bordaleft">Acesso a palestras do Palco x</td>
            <td className="boxCenter">
              <FiMinus size={38} color="white" />
            </td>
            <td className="boxCenter">
              {" "}
              <FiCheckCircle size={38} color="white" />
            </td>
          </tr>
          <tr>
            <td className="bordaleft">Acesso a palestras do Palco x</td>
            <td className="boxCenter">
              <FiMinus size={38} color="white" />
            </td>
            <td className="boxCenter">
              {" "}
              <FiCheckCircle size={38} color="white" />
            </td>
          </tr>
          <tr>
            <td className="bordaleft">Acesso a palestras do Palco x</td>
            <td className="boxCenter">
              <FiMinus size={38} color="white" />
            </td>
            <td className="boxCenter">
              {" "}
              <FiCheckCircle size={38} color="white" />
            </td>
          </tr>
          <tr>
            <td className="bordaleft">Acesso a palestras do Palco x</td>
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
        <BtnIngresso url="https://satsconf24.vercel.app/ingressos">
          COMPRAR INGRESSO
        </BtnIngresso>
        {/* botão do container principal */}
        <BtnNovidades url="/">COMPRAR EM GRUPO</BtnNovidades>
      </div>
    </div>
    </div>
   
  );
};

export default BoxTabelaIngresso;
