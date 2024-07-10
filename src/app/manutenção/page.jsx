import MeuComponenteLogo from "@/components/(landingpage)/images/MeuComponenteLogo";
import Link from "next/link";

const Manutencao = () => {
    return(
      <div id="Manutencao">
         <div className="headerManutencao">
            <h2>Ingressos da pré-venda disponíveis apenas para pagamento em Bitcoin</h2>
        </div>
        <div className="boxManutencao">
       
        <div className="krona-one-bold ">
            <h3>8 E 9 DE NOVEMBRO <br />
            EM SÃO PAULO</h3>
            <div>
            <div className="logoManutencao">
              <MeuComponenteLogo />
            </div>
            </div>
        
            <h4>Pré-venda encerrada! <br />
            Novidades em breve!</h4>
        </div>
        
        </div>
        <div className="footerManutencao">
            <p>Entre para o nosso{' '}
            <Link href="https://chat.whatsapp.com/JLDl4QZwwXb1htqScSJXgq">
            grupo no WhatsApp 
            </Link>{' '}
            e fique sabendo de todas as novidades em primeira mão!</p>
        </div>
        
      </div>
    )
}

export default Manutencao;