import { Link } from 'react-router-dom';
import './errorRoute.css'

const ErrorRoute = () =>{
  return(
    <div className="error-container">
      <p style={{fontSize:'5rem'}}>UPS!</p>
      <p>Ha llegado a una página que no existe</p>
      <Link to="/" className='my-btc' > Volver al Inicio </Link>
    </div>
  )
}

export default ErrorRoute;