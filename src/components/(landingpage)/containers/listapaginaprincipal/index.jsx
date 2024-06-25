// ListaConvidadosPaginaInicial.jsx

import Card from "../../ui/modal/modalDestaque/Card";

const ListaConvidadosPaginaInicial = ({ profiles }) => {
  

  return (
    <div id="listaPalestrantes" className="profile-card">
      {profiles.map((profile, index) => (
        <Card
          key={profile.id}
          id={profile.id}
          name={profile.name}
          skills={profile.skills}
          description={profile.description}
          image={profile.image}
          twitter={profile.socialMedia.twitter}
          link={profile.socialMedia.link}
          linkedin={profile.socialMedia.linkedin}
          nostr={profile.socialMedia.nostr}
          instagram={profile.socialMedia.instagram}
          youtube={profile.socialMedia.youtube}
          github={profile.socialMedia.github}
          className={index < 3 ? "palestrante-destaque " : "palestrante-global"}
        />
      ))}
    </div>
  );
};

export default ListaConvidadosPaginaInicial;
