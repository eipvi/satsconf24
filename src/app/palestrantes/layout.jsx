export const metadata = {
  title: "Palestrantes",
  description: "Veja os palestrantes no Satsconf 2024",
  keywords:['participantes satsconf', 'palestrantes evento satsconf', 'palestrantes da edição 2024 satsconf', 'palestrantes evento bitcoin sao paulo'],
  openGraph:{
    title: "Palestrantes - O Maior Evento 100% Bitcoin do Brasil",
    description: "Conheça os palestrantes da edição 2024",
    type: "website",
    url: "https://www.satsconf.com.br/palestrantes",
    images: ['https://pbs.twimg.com/profile_banners/1521946346894151682/1710450716/600x200'],
  }
};


export default function PalestrantesLayout({ children }) {
  return (
    <>
    {children}
    </>
  )
}