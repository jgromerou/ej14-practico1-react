import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Sidebar from '../../common/Sidebar';

const CrearReceta = () => {
  const tituloBoton = 'Volver';
  return (
    <Container className="mainSection  my-3">
      <Row className="g-3 mb-3">
        <Sidebar tituloBoton={tituloBoton} />
        <Col md={9}>
          <aside className="flex-grow-aside text-light">
            <hr />
            <h1 className="display-4 mt-3">Nueva Receta</h1>
            <hr />
            <Form>
              <Form.Group className="mb-3" controlId="formNombreReceta">
                <Form.Label>Nombre Receta*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej: Vasos de Crema de Vainilla con frutos rojos"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formDescripcion">
                <Form.Label>Descripción*</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Ej: Una sola cucharadita de estos vasitos basta para rendirse totalmente a ella y convertirla en LA CREMA DE VAINILLA, con mayúsculas, por excelencia."
                  className="altoDeArea"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formIngredientes">
                <Form.Label>Ingredientes*</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Ej: 330 g nata líquida, 2 vainas de vainilla, 55 g de azúcar, etcétera..."
                  className="altoDeArea"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formInstrucciones">
                <Form.Label>Instrucciones*</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Ej: 1. El día anterior corta longitudinalmente las vainas de vainilla y raspa las semillas. 2. Pon vainas y semillas con la nata en un recipiente hermético y deja que macere en la nevera. 3. ---"
                  className="altoDeArea"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formImagen">
                <Form.Label>Imagen URL*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej: https://images.pexels.com/photos/16132921/pexels-photo-16132921/free-photo-of-comida-mercado-fruta-grande.jpeg"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formCategoria">
                <Form.Label>Categoria*</Form.Label>
                <Form.Select>
                  <option value="">Seleccione una opcion</option>
                  <option value="Dulce">Dulce</option>
                  <option value="Salado">Salado</option>
                  <option value="Infantiles">Infantiles</option>
                  <option value="Apto para Celíacos">Apto para Celíacos</option>
                </Form.Select>
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-1 mb-3">
                Guardar
              </Button>
            </Form>
          </aside>
        </Col>
      </Row>
    </Container>
  );
};

export default CrearReceta;
