import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import imgContacto from "/imgContacto.png";
import "./Contacto.css";

const Contacto = () => {
  const [values, setValues] = useState({
    nombre: "",
    email: "",
    msj: "",
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mensaje = {
      mensaje: values,
    };
    const msjRef = collection(db, "mensajes");
    addDoc(msjRef, mensaje)
  };
  return (
    <div className="container-contacto">
      <h3>Contanos tus dudas, preguntas o sugerencia</h3>
      <div className="container-img-formulario">
        <div className="container-img-contacto">
          <img
            className="img-contacto"
            src={imgContacto}
            alt="dsm soul vibes"
          />
        </div>
        <div className="container-formulario">
          <div className="container-texto-contacto">
            <p>
              DSM Soul Vibes quiere tener una relación directa y darles un
              sinfín de beneficios con todos los comercios que deseen
              comercializar nuestras distintas líneas de producto. <br />
              Por eso invitamos a todos los comerciantes que se pongan en
              contacto con nosotros para conocer los beneficios que DSM Soul
              Vibes estableció para ellos.
            </p>
          </div>
          <form className="contacto-form" onSubmit={handleSubmit}>
            <input
              onChange={handleInputChange}
              type="text"
              name="nombre"
              value={values.nombre}
              placeholder="Nombre"
              required
            />
            <input
              onChange={handleInputChange}
              type="email"
              name="email"
              value={values.email}
              placeholder="E-mail"
              required
            />
            <textarea
              onChange={handleInputChange}
              type="text"
              name="msj"
              value={values.msj}
              cols="30"
              rows="10"
              placeholder="Contanos tus dudas, preguntas o sugerencia..."
              required
            ></textarea>
            <button className="btn btn-primary">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
