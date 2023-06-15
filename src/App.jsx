import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Menu from './components/common/Menu';
import Footer from './components/common/Footer';
// import Inicio from './components/views/Inicio';
import Administrador from './components/views/Administrador';
// import Error404 from './components/views/Error404';

// import CrearReceta from './components/views/receta/CrearReceta';
// import EditarReceta from './components/views/receta/EditarReceta';

function App() {
  return (
    <>
      <Menu></Menu>
      {/* <Inicio></Inicio> */}
      <Administrador></Administrador>
      {/* <Error404></Error404> */}
      {/* <CrearReceta></CrearReceta> */}
      {/* <EditarReceta></EditarReceta> */}
      <Footer></Footer>
    </>
  );
}

export default App;
