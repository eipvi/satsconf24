const Programacao = ({ children }) => {
  return (
    <section id="PagProgramacao">
            {/* Aqui é onde você renderiza children */} {children}
        <div className="containerPagProgramacao">
            <h2>Em breve mais informações!</h2>
            <p>Estamos preparando algo especial para você!</p>
        </div>
      </section>
  );
};

export default Programacao;
