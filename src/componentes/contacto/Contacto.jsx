import "./Contacto.css";
import imgContacto from "/imgContacto.png"


const Contacto = () => {
  return (
    <div className="container-contacto">
      <h3>Contanos tus dudas, preguntas o sugerencia</h3>
      <div className="container-img-formulario">
      <div className="container-img-contacto">
        <img className="img-contacto" src={imgContacto} alt="dsm soul vibes" />
      </div>
      <div className="container-formulario">

      </div>
      </div>
      <div className="container-texto-contacto">
        <p>DSM Soul Vibes quiere tener una relación directa y darles un sinfín de beneficios con todos los comercios que deseen comercializar nuestras distintas líneas de producto. <br /> 
        Por eso invitamos a todos los comerciantes que se pongan en contacto con nosotros para conocer los beneficios que DSM Soul Vibes estableció para ellos.</p>
      </div>
    </div>
  );
};

export default Contacto;