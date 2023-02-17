import BoldText from "../bold/BoldText";
import { Link } from "react-router-dom";

const FinCompra = ({ orderId, date }) => {
  return (
    <div className="fin-compra-container">
      <h2>Tu compra ha sido exitosa</h2>
      <hr />
      <p>
        Fecha de compra:<BoldText> {date} </BoldText>
      </p>
      <p>
        Tu código de orden es: <BoldText> {orderId} </BoldText>
      </p>

      <Link to="/" className="my-btc">
        Volver al inicio
      </Link>
    </div>
  );
};

export default FinCompra;
