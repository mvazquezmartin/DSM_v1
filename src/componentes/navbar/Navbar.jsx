import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import CartWidget from "../cartWidget/CartWidget";
import "./Navbar.css";

function NavbarBt() {
  return (
    <Navbar className="py-4" fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/" className="navbar-brand">
          DSM Soul Vibes
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-center"
          id="responsive-navbar-nav"
        >
          <Nav>
            <NavDropdown title="PRODUCTOS" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/productos/hombre">
                Hombre
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/productos/mujer">
                Mujer
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/productos/nuevacoleccion">
                Nueva Colección
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/productos">
                Ver Todo
              </NavDropdown.Item>
            </NavDropdown>
            <Link to="/contacto" className="nav-link">
              CONTACTO
            </Link>
            <Link to="/nosotros" className="nav-link">
              NOSOTROS
            </Link>
           
          </Nav>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
  );
}

export default NavbarBt;
