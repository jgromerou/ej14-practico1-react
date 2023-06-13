import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Container className="paginaPrincipal my-5">
        <h1 className="text-uppercase my-2">
          Ejercicio 14 de Blog de Recetas de cocina
        </h1>
      </Container>
      <Footer />
    </>
  );
}

export default App;
