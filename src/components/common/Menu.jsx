import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          Blog - Recetas de Cocina
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end className={"nav-item nav-link"} to={"/"}>Inicio </NavLink>
            <NavLink end className={"nav-item nav-link"} to={"/administrador"}>Administrador</NavLink>
            <Nav.Link end className={"nav-item nav-link"} to={"/*"}>Error404</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
