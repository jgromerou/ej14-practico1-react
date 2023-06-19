import { Col, Card, Button } from "react-bootstrap";

const CardReceta = ({ receta }) => {
  return (
    <Col md={4} lg={3} className="mb-3">
      <Card>
        <Card.Img variant="top" src={receta.imagen} />
        <Card.Body>
          <Card.Title>{receta.nombreReceta}</Card.Title>
          <Card.Text>Categoria: {receta.categoria}</Card.Text>
          <Button variant="primary">Ver Mas</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardReceta;
