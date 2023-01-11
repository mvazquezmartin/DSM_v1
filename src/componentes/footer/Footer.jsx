import {
  BsTruck,
  BsCreditCard,
  BsLock,
  BsFacebook,
  BsInstagram,
  BsWhatsapp,
  BsGithub,
} from "react-icons/bs";
import logo from "/logo.png";
import CardFooter from "./CardFooter";
import "./Footer.css";

const Footer = () => {
  const truck = <BsTruck className="iconos" />;
  const creditCard = <BsCreditCard className="iconos" />;
  const lock = <BsLock className="iconos" />;

  return (
    <footer>
      <div className="container-banner-pie">
        <CardFooter
          icono={truck}
          titulo="ENVIO AL TODO EL PAIS"
          subtitulo="COMPRA SIN SALIR DE TU CASA"
        />
        <CardFooter
          icono={creditCard}
          titulo="HASTA 12 CUOTAS"
          subtitulo="CON TODAS LAS TARJETAS"
        />
        <CardFooter
          icono={lock}
          titulo="COMPRA SEGURA"
          subtitulo="PROTEGEMOS TUS DATOS"
        />
      </div>
      <div className="container-datos-pie">
        <div className="info-pie">
          <p>Aviso Legal</p>
          <p>Politica de Privacidad</p>
          <p>Privacidad de Cookies</p>
          <p>Privacidad de Calidad</p>
        </div>
        <div className="logo-icono-pie">
          <img className="img-logo-pie" src={logo} alt="Logo DSM" />
          <div className="icono-pie">
            <a href="https://www.facebook.com/" target="_blank">
              <BsFacebook className="icono-rrss" />
            </a>
            <a href="https://www.instagram.com/leomessi/" target="_blank">
              <BsInstagram className="icono-rrss" />
            </a>
            <a href="https://www.whatsapp.com/?lang=es" target="_blank">
              <BsWhatsapp className="icono-rrss" />
            </a>
            <a href="https://github.com/mvazquezmartin" target="_blank">
              <BsGithub className="icono-rrss" />
            </a>
          </div>
        </div>
        <div className="map-pie">
          <iframe
            className="iframe-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4736.779468475947!2d-60.67561747265167!3d-32.913793744248565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b6552dba39ff61%3A0xe38c9dfd91264a1!2sEstadio%20de%20ROSARIO%20CENTRAL!5e0!3m2!1ses-419!2sar!4v1673278625666!5m2!1ses-419!2sar"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
