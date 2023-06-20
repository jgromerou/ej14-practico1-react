import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Inicio from "./components/views/Inicio";
import Registro from "./components/views/Registro";
import Error404 from "./components/views/Error404";
import Login from "./components/views/Login";
import DetalleReceta from "./components/views/DetalleReceta";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RutasPrivadas from "./components/routes/RutasPrivadas";
import RutasAdministrador from "./components/routes/RutasAdministrador";


function App() {
  return (
    <>
      <BrowserRouter>
    <Menu></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route exact path="/registro" element={<Registro></Registro>}></Route>
        <Route exact path="/login" element={<Login></Login>}></Route>
        <Route exact path="/detalle" element={<DetalleReceta></DetalleReceta>}></Route>
        <Route path="/administrador/*" element={
          <RutasPrivadas>
            <RutasAdministrador></RutasAdministrador>
          </RutasPrivadas>
        }></Route>
        
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </>
  );
}

export default App;
