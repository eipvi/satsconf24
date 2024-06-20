"use client";
import { useState } from "react";
import ListaConvidadosPaginaInicial from "../listapaginaprincipal";
import BtnNovidades from "../../ui/button/BtnNovidades";

const BoxConvidados = () => {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "Alex Gladstein",
      description:
        "Alex Gladstein é o chief strategy officer da Human Rights Foundation. Alex frequentemente fala e escreve sobre porque o Bitcoin é importante como ferramenta para a liberdade e faz um trabalho importante conectando ativistas e ONGs de direitos humanos com a comunidade de desenvolvedores e educadores do Bitcoin.",
      image: "./alex-gladstein.jpeg",
      skills: "Human Rights Foundation",
      socialMedia: {
        twitter: "https://twitter.com/gladstein",
        linkedin: "",
        nostr:
          "https://nostr.com/npub1csuq0wzew7r6nynh97vjfamxrcqk70hgk8a3hvqz9ftzuu0sshtsm5xfjj",
        instagram: "",
        youtube: "",
        github: "",
        // palestrantes da pagina inicial
      },
    },
    {
      id: 2,
      name: "Margot Paez",
      description: (
        <>
          Margot Paez é bolsista do Bitcoin Policy Institute e candidata a
          doutorado no departamento de engenharia civil do Georgia Institute of
          Technology. Ela tem mestrado em Física pela GT e estuda tópicos
          relacionados às mudanças climáticas, incluindo o impacto energético e
          ambiental da mineração de Bitcoin. Apoie o trabalho da Margot
          combatendo FUD sobre mineração:{" "}
          <a
            href="https://geyser.fund/project/miningfudbuster"
            target="_blank"
            rel="noopener noreferrer"
          >
            Saiba mais
          </a>
        </>
      ),
      image: "./margot-paez.jpg",
      skills: "Bitcoin Policy Institute",
      socialMedia: {
        twitter: "https://twitter.com/jyn_urso",
        linkedin: "",
        nostr:
          "https://nostr.com/npub12lzwey2hjc2ce0stwa3ldhg04h93wj263lvdhrf87qfzz9jsggeqwuntw2",
        instagram: "",
        youtube: "",
        github: "",
      },
    },
    {
      id: 3,
      name: "Giacomo Zucco",
      description:
        "Giacomo é consultor/professor do protocolo Bitcoin e do protocolo Lightning Network. Ele passa seu tempo apoiando projetos que considera relevantes para o futuro do Bitcoin, seja como educador, consultor, empreendedor, maximalista ou troll. Anteriormente, ele esteve envolvido na GreenAddress, AssoBIT, BlockchainLab, Bitcoin Magazine. Atualmente ele está promovendo Bitcoin através da Rede Plano B, BTCTimes, Relai, BCademy, Notarify.",
      image: "./giacomo-zucco.webp",
      skills: "Plan B Network",
      socialMedia: {
        twitter: "https://twitter.com/giacomozucco",
        linkedin: "",
        nostr:
          "https://nostr.com/npub1au23c73cpaq2whtazjf6cdrmvam6nkd4lg928nwmgl78374kn29sq9t53j",
        instagram: "",
        youtube: "",
        github: "",
      },
    },
    {
      id: 4,
      name: "Carol Souza",
      description:
        "Co-founder, creator e educadora na Area Bitcoin, a maior escola de Bitcoin do mundo. Suas aulas e método tem como objetivo o desenvolvimento da soberania financeira e intelectual.",
      image: "./selfie-carol.jpg",
      skills: "Area Bitcoin",
      socialMedia: {
        twitter: " https://twitter.com/carol_bitcoin",
        linkedin: "",
        nostr: "",
        instagram: "https://www.instagram.com/area.bitcoin/",
        youtube: "https://www.youtube.com/@AreaBitcoin",
        github: "",
      },
    },
    {
      id: 5,
      name: "Rapha Zagury",
      description:
        "Atualmente, Raphael atua como CIO e Head of Research na Swan. Antes de ingressar na Swan, ele fundou e atuou como CFO para Open Co, onde liderou com sucesso a empresa através de várias rodadas de financiamento. Antes da Open Co, Raphael fundou a One Partners, uma boutique de fusões e aquisições e firma de gestão de patrimônio no Brasil. Originalmente do Rio de Janeiro, Brasil, Raphael obteve seu MBA na Yale School of Management e seu diploma de Economia no Instituto Brasileiro de Mercado de Capitais (IBMEC).      ",
      image: "./rapha.png",
      skills: "Swan",
      socialMedia: {
        twitter: "https://twitter.com/alphaazeta",
        linkedin: "https://www.linkedin.com/in/rzagury",
        nostr:
          "http://nostr.com/npub1m3xsmhkcmv20wgaywfeelmvxeww4d67d8sct5cvlffzfa3lkxpus7vdwhx",
        instagram: "",
        youtube: "",
        github: "",
      },
    },
    {
      id: 6,
      name: "Diego Kolling",
      description:
        "Apaixonado por tecnologia e finanças, Diego é um prolífico educador de Bitcoin e Lightning. Além de ter um canal educacional no Youtube, gere a comunidade NodeRunners Brasil, voltada a educação de operadores de nodes da Lightning Network.",
      image: "./diego-Kolling.png",
      skills: "NodeRunners Brasil",
      socialMedia: {
        twitter: "https://twitter.com/diegokolling",
        linkedin: "",
        nostr:
          "http://nostr.com/npub1z24p8ghllrl4jxyw8juggm3cfrpn8vvfxxsjzjj4tuaz0qfkeqkstnk760",
        instagram: "",
        youtube: "",
        github: "",
      },
    },
    {
      id: 7,
      name: "Kaká Furlan",
      description:
        "Co-founder, creator e educadora na Area Bitcoin, a maior escola de Bitcoin do mundo. Suas aulas e método tem como objetivo o desenvolvimento da soberania financeira e intelectual.    ",
      image: "./selfie-kaka.jpg",
      skills: "Area Bitcoin",
      socialMedia: {
        twitter: "https://twitter.com/kakafurlan",
        linkedin: "",
        nostr: "",
        instagram: "https://www.instagram.com/area.bitcoin/",
        youtube: "https://www.youtube.com/@AreaBitcoin ",
        github: "",
      },
    },
    {
      id: 8,
      name: "Bruno Garcia",
      description:
        "Um dos 50 desenvolvedores com mais contribuições do Bitcoin Core, Bruno é também diretor educacional da Vinteum, um centro de pesquisa e desenvolvimento de Bitcoin sem fins lucrativos dedicado a apoiar os desenvolvedores de Bitcoin no Brasil.",
      image: "./bruno-garcia.jpeg",
      skills: "Bitcoin Core Dev",
      socialMedia: {
        twitter: "https://twitter.com/brrrunog ",
        linkedin: "",
        nostr:
          "https://www.nostr.com/npub12a6hhhcn3lvhehzm7wgx44jjh4cvu2djj0txezentawumdk5ky8qquclwp ",
        instagram: "",
        youtube: "",
        github: "https://github.com/brunoerg ",
      },
    },
    {
      id: 9,
      name: "Caio Leta ",
      description:
        "PhD em geologia econômica e isotópica; bitcoin minimalista; fundador do projeto Explica Bitcoin; autor do livro O Mundo Mágico do Bitcoin; Head de Pesquisa e Conteúdo na Bipa.      ",
      image: "./caio-leta.jpg",
      skills: "Bipa",
      socialMedia: {
        twitter: "https://twitter.com/caioleta_",
        linkedin: "",
        nostr:
          "http://nostr.com/npub169jj88ry88e7f6cmcngcz8mu67ak6q6u2pgtcae6wa4ju00z8gts8hac60",
        instagram: "http://instagram.com/caioleta_",
        youtube: "https://www.youtube.com/c/ExplicaBitcoin",
        github: "",
      },
    },
    {
      id: 10,
      name: "Steven Roose",
      description:
        "Importante contribuidor open-source para o ecossistema Rust-bitcoin, Ark, e para a rede Liquid.      ",
      image: "./steven-roose.jpeg",
      skills: "Ark",
      socialMedia: {
        twitter: "https://twitter.com/stevenroose3",
        linkedin: "",
        nostr: "",
        instagram: "",
        youtube: "",
        github: "https://github.com/stevenroose",
      },
    },
    {
      id: 11,
      name: "Ivy Galindo",
      description:
        "Growth Acquisition Lead na Swan. Com seus mais de seis anos de experiência em empresas como Warner Bros, Swile, GetNinjas, Huobi e ZEBEDEE, ela almeja acelerar a adoção do Bitcoin em todo o mundo. Além de rodar um dos poucos nodes de Bitcoin e Lightning no sul do Brasil.",
      image: "./ivy-galindo.jpg",
      skills: "Swan",
      socialMedia: {
        twitter: "https://twitter.com/ivygalindo_",
        link: "https://vida.page/ivygalindo",
        linkedin: "",
        nostr: "",
        instagram: "",
        youtube: "",
        github: "",
      },
    },
    {
      id: 12,
      name: "Lucas Ferreira",
      description:
        "Idealizador da Satsconf, Lightning Evangelist na Lightning Labs, responsável pelo desenvolvimento da principal implementação da Lightning Network. É também co-fundador e diretor executivo da Vinteum, um centro de pesquisa e desenvolvimento dedicado a formar desenvolvedores de Bitcoin.",
      image: "./lucas-ferreira.jpg",
      skills: "Lightning Labs / Vinteum",
      socialMedia: {
        twitter: "https://twitter.com/lucasdcf",
        link: "",
        linkedin: "",
        nostr:
          "http://nostr.com/npub1pumdyz7qfu0suamv4nrl0vcg574dtl5mwazva6nyjxhpwc4ccxxqca3ane",
        instagram: "",
        youtube: "",
        github: "",
      },
    },

    {
      id: 13,
      name: "Madu",
      description:
        "Educadora, Madu é redatora e entusiasta de Bitcoin, que busca compartilhar todo o aprendizado para outras pessoas, nos mais variados formatos digitais. Já trabalhou com empresas especializadas no setor como: Area Bitcoin, Livecoins, Mercado Bitcoin, Arthur Mining e TC Investimentos.      ",
      image: "./madulobato.jpg",
      skills: "Blink",
      socialMedia: {
        twitter: "https://twitter.com/eduardalobatoo",
        link: "",
        linkedin: "",
        nostr:
          "http://nostr.com/npub1p9auvqfn3dtrjnwkhxdvvk6xn3tt8aa2uv4dh2af42nv9z8nh0msrjvmhp",
        instagram: "https://www.instagram.com/eduardalobato/",
        youtube: "",
        github: "",
      },
    },
  ]);

  const index = 0;

  return (
    <section id="listaConvidados">
      <div className="bgContainerImgPalestrantes">
        <div className="containerTitlePalestrantes boxTitle ">
          <h2>Palestrantes </h2>
        </div>
        <div className="listaConvidadosPaginaPrincipal">
          <ListaConvidadosPaginaInicial profiles={profiles} index={index} />
        </div>
        <div className="container-btn-palestrantes">
          <BtnNovidades url="https://www.satsconf.com.br/palestrantes">
            {" "}
            VEJA TODOS PALESTRANTES{" "}
          </BtnNovidades>
        </div>
      </div>
    </section>
  );
};

export default BoxConvidados;
