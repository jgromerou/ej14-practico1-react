import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../common/Sidebar';

const Administrador = () => {
  return (
    <Container className="mainSection my-3">
      <Row className="g-3 mb-3">
        <Sidebar />
        <Col md={9}>
          <aside className="flex-grow-aside">
            <h1 className="fw-bold mb-3 p-2">Main</h1>
          </aside>
        </Col>
      </Row>
    </Container>
  );
};

export default Administrador;
