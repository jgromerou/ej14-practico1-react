import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Menu from './components/common/Menu';
import Footer from './components/common/Footer';
import Error404 from './components/views/Error404';
// import Inicio from './components/views/Inicio';
// import Administrador from './components/views/Administrador';

function App() {
  return (
    <>
      <Menu></Menu>
      {/* <Inicio></Inicio> */}
      {/* <Administrador></Administrador> */}
      <Error404></Error404>
      <Footer></Footer>
    </>
  );
}

export default App;
