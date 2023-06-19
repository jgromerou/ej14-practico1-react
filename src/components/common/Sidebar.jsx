import { Col, Button } from 'react-bootstrap';
const Sidebar = ({ tituloBoton = 'Nueva Receta' }) => {
  return (
    <>
      <Col md={3}>
        <aside className="flex-grow-aside">
          <h3 className="fw-bold mb-3 mt-2">Hola: usuario</h3>
          <Button variant="primary" className="w-100 d-sm-block mt-1 btnBlock">
            {tituloBoton}
          </Button>
        </aside>
      </Col>
    </>
  );
};

export default Sidebar;
