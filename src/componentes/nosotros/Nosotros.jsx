import nosotrosImg from "/nosotros.jpg";
import BoldText from "../bold/BoldText";
import "./nosotros.css";

const Nosotros = () => {
  return (
    <div className="container-nosotros">
      <div className="titulo-nosotros">
        <h1>Nosotros somos DSM Soul Vibes</h1>
      </div>
      <div className="container-txt-img">
        <p className="texto-nosotros">
          <BoldText>
            Somos una empresa textil dedicada a la fabricación y venta de ropa
            interior de alta calidad. Con más de 10 años de experiencia en el
            mercado, nos enorgullece ofrecer productos confortables, elegantes y
            duraderos a nuestros clientes.
          </BoldText>{" "}
          <br /> Nuestro equipo de diseñadores y expertos en confección trabaja
          incansablemente para asegurarse de que cada prenda cumpla con los más
          altos estándares de calidad.{" "}
          <BoldText>
            Además, nos esforzamos por utilizar materiales sostenibles y
            responsables en todos nuestros procesos de fabricación.
          </BoldText>{" "}
          <br /> <br /> En resumen, nuestro objetivo es brindar a nuestros
          clientes la mejor experiencia posible con nuestros productos.
        </p>
        <div className="img-nosotros">
          <img src={nosotrosImg} alt="imagen fabrica DSM" />
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
