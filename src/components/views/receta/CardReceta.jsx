import { Col, Card, Button } from "react-bootstrap";

const CardReceta = () => {
  return (
    <Col md={4} lg={3} className="mb-3">
      <Card>
        <Card.Img
          variant="top"
          src="https://images.pexels.com/photos/7601435/pexels-photo-7601435.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <Card.Body>
          <Card.Title>ASADITO</Card.Title>
          <Card.Text>Categoria: Salado</Card.Text>
          <Button variant="primary">Ver Mas</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardReceta;