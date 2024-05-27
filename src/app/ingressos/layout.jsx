export const metadata = {
  title: "Ingressos",
  description: "Veja os ingressos do Satsconf 2024",
  keywords:['ingresso satsconf', 'comprar ingresso satsconf', 'Comprar Ingresso SatsConf', 'como adquirir ingresso satsconf btc', 'comprar ingresso btc sp', 'comprar ingresso bitcoin sao paulo', 'evento bitcoin novembro sao paulo'],
  openGraph:{
    title: "Ingresso - O Maior Evento 100% Bitcoin do Brasil",
    description: "Comprar Ingresso",
    type: "website",
    url: "https://www.satsconf.com.br/ingressos",
    images: ['https://pbs.twimg.com/profile_banners/1521946346894151682/1710450716/600x200'],
  }
};


export default function IngressosLayout({ children }) {
  return (
    <>
    {children}
    </>
  )
}