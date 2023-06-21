import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardReceta = ({ receta }) => {
  return (
    <Col md={4} lg={3} className="mb-3">
      <Card>
        <Card.Img variant="top" src={receta.imagen} />
        <Card.Body>
          <Card.Title>{receta.nombreReceta}</Card.Title>
          <Card.Text>Categoria: {receta.categoria}</Card.Text>
          <Link className="btn btn-primary" to={'/detalle/' + receta.id}>
            Ver Detalles
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardReceta;
