import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Menu from './components/common/Menu';
import Footer from './components/common/Footer';
// import Inicio from './components/views/Inicio';
import Administrador from './components/views/Administrador';
// import Error404 from './components/views/Error404';

// import CrearBlog from './components/views/blog/CrearBlog';
// import EditarBlog from './components/views/blog/EditarBlog';

function App() {
  return (
    <>
      <Menu></Menu>
      {/* <Inicio></Inicio> */}
      <Administrador></Administrador>
      {/* <Error404></Error404> */}
      {/* <CrearBlog></CrearBlog> */}
      {/* <EditarBlog></EditarBlog> */}
      <Footer></Footer>
    </>
  );
}

export default App;
