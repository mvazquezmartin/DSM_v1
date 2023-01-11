import "./CardFooter.css";

const CardFooter = ({ icono, titulo, subtitulo }) => {
  return (
    <div className="container-pie-card">
      {icono}
      <p className="titulo">{titulo}</p>
      <p className="subtitulo">{subtitulo}</p>
    </div>
  );
};

export default CardFooter;
