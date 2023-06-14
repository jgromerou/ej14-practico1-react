import { Col, Button } from 'react-bootstrap';
const Sidebar = () => {
  return (
    <>
      <Col md={3}>
        <aside className="flex-grow-aside">
          <h3 className="fw-bold mb-3">Hola: usuario</h3>

          <Button variant="primary" className="w-100 d-sm-block">
            Nuevo Blog
          </Button>
        </aside>
      </Col>
    </>
  );
};

export default Sidebar;
