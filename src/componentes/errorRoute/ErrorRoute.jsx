import { Link } from 'react-router-dom';
import './errorRoute.css'

const ErrorRoute = () =>{
  return(
    <div className="error-container">
      <p style={{fontSize:'5rem'}}>UPS!</p>
      <p>Parece que no existe ese URL</p>
      <Link to="/" className='my-btc' > Volver al Inicio </Link>
    </div>
  )
}

export default ErrorRoute;