import Link from "next/link";

const CompraReal = () => {
  return (
    <div id="btnComprarReal" className="containerComprarIngressoReal">
      <ul>
        <li>
          <img src="ingresso-normal-satsconf.png" alt="Comprar ingresso Normal Pass" />
        </li>
        <li>
          <span>Normal Pass</span>
        </li>
        <li>R$250</li>
        <li>
        <div className="buttonIngressoComprar">
          <Link href="https://ingresso.satsconf.com.br/cart/41610642194567:1?storefront=true">Comprar</Link>
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
        <li>R$750</li>
        <li>
          <div className="buttonIngressoComprar">
          <Link href="https://ingresso.satsconf.com.br/cart/41610646388871:1?storefront=true">Comprar</Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CompraReal;
