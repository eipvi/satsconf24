import Link from "next/link";
import cookie from "js-cookie";

const CompraBtc = () => {
  return (
    <div id="btnComprarReal" className="containerComprarIngressoReal">
      <ul>
        <li>
          <img
            src="ingresso-normal-satsconf.png"
            alt="Comprar ingresso Normal Pass"
          />
        </li>
        <li>
          <span>Normal Pass</span>
        </li>
        <li>R$197,50</li>
        <li>
          <div className="buttonIngressoComprar">
            <Link href="https://ingresso.satsconf.com.br/cart/41678531788935:1?storefront=true" onClick={() =>{
            cookie.set("btn_normal_pass", "button_buy_785846", {
              httpOnly: true,
              secure: process.env.NODE_ENV === 'production',
              sameSite: 'strict'
            })
          }}>
              Comprar
            </Link>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <img src="ingresso-vip-satsconf.png" alt="Comprar ingreso Vip Pass" />
        </li>
        <li>
          <span>VIP Pass</span>
        </li>
        <li>R$592,50</li>
        <li>
          <div className="buttonIngressoComprar">
            <Link href="https://ingresso.satsconf.com.br/cart/41678547320967:1?storefront=true" onClick={() =>{
            cookie.set("btn_vip_pass", "button_buy_584581", {
              httpOnly: true,
              secure: process.env.NODE_ENV === 'production',
              sameSite: 'strict'
            })
          }}>
              Comprar
            </Link>
          </div>
        </li>
      </ul>

      <div className="boxDescontoIngresso">
        <h3>ATENÇÃO! 21% de desconto pagando em Bitcoin!</h3>
      </div>
    </div>
  );
};

export default CompraBtc;
