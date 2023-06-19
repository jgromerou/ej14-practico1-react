import { Container, Row } from "react-bootstrap";
// import CardReceta from "./receta/CardReceta";

const Inicio = () => {
  return (
    <section className="mainSection">
      <img
        className="banner imgbanner"
        src="https://images.pexels.com/photos/5737464/pexels-photo-5737464.jpeg"
        alt="fondo receta"
      />
      <Container>
        <h1 className="display-4 my-2">Nuestras Recetas</h1>
        <hr />
        {/* <Row>
          <CardReceta></CardReceta>
          <CardReceta></CardReceta>
          <CardReceta></CardReceta>
          <CardReceta></CardReceta>
          <CardReceta></CardReceta>
        </Row> */}
      </Container>
    </section>
  );
};

export default Inicio;
