import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import "./Navbar.css";

function NavbarBt() {
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
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
              <NavDropdown.Item as={Link} to="/productos/Male">
                Hombre
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/productos/Female">
                Mujer
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Nueva Colección
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/productos">
                Ver Todo
              </NavDropdown.Item>
            </NavDropdown>
            <Link to="/nosotros" className="nav-link">
              CONTACTO
            </Link>
            <Link to="/nosotros" className="nav-link">
              NOSOTROS
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link className="nav-link">
          <BsCart className="icono-cart" />
        </Nav.Link>
      </Container>
    </Navbar>
  );
}

export default NavbarBt;
