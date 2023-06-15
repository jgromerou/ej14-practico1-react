import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import Sidebar from '../common/Sidebar';

const Administrador = () => {
  return (
    <Container className="mainSection  my-3">
      <Row className="g-3 mb-3">
        <Sidebar />
        <Col md={9}>
          <aside className="flex-grow-aside">
            <hr />
            <section className="container mainSection">
              <div className="d-flex justify-content-between align-items-center mt-3">
                <h1 className="display-4 ">Recetas Disponibles</h1>
              </div>
              <hr />
              <Table
                responsive
                striped
                bordered
                hover
                className="text-bg-light"
              >
                <thead className="mt-2">
                  <tr>
                    <th>Cod</th>
                    <th>Receta</th>
                    <th>URL de Imagen</th>
                    <th>Categoria</th>
                    <th>Opciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td className="tamanioCelda text-truncate">
                      Tarta de fresas y albahaca
                    </td>
                    <td className="tamanioCelda text-truncate">
                      https://cdn.shopify.com/s/files/1/0191/9978/files/1_5f502ef5-6c01-4694-b1ed-be0fb7ff2904.jpg?v=1686237776
                    </td>
                    <td>Dulce</td>
                    <td className="tamanioCeldaOpciones text-center">
                      <Button className="btn btn-warning my-2 my-lg-0 me-lg-2">
                        <i className="bi bi-pencil p-1"></i>
                      </Button>
                      <Button variant="danger">
                        <i className="bi bi-x-lg p-1"></i>
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </section>
          </aside>
        </Col>
      </Row>
    </Container>
  );
};

export default Administrador;
