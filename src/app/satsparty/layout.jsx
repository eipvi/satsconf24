export const metada = {
    title: "Satsparty",
    description:" Evento exclusivo para os Sats Party.",
    keywords:['edição satsconf 2023', 'evento sats conf', 'evento satsconf', 'satsparty', 'imagens do evento satsparty', 'satsparty sao paulo'],
    openGraph:{
      title: "Satsparty - O Maior Evento 100% Bitcoin do Brasil",
      description: "Entre no novo mundo com a gente!",
      type: "website",
      url: "https://www.satsconf.com.br/satsparty",
      images: ['https://pbs.twimg.com/profile_banners/1521946346894151682/1710450716/600x200'],
    }
};

export default function pSatsPartyLayout({ children }) {
    return (
        <>
        {children}
        </>
    )
}