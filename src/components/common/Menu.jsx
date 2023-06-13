import { Navbar, Container, Nav } from 'react-bootstrap';

const Menu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Blog - Recetas de Cocina</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link active href="#deets">
              Inicio
            </Nav.Link>
            <Nav.Link href="#memes">Administrador</Nav.Link>
            <Nav.Link href="#memes">Error404</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
