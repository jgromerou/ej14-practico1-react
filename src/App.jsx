import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Inicio from "./components/views/Inicio";
import Administrador from "./components/views/Administrador";
import Error404 from "./components/views/Error404";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RutasPrivadas from "./components/routes/RutasPrivadas";
import RutasAdministrador from "./components/routes/RutasAdministrador";

import CrearReceta from "./components/views/receta/CrearReceta";
import EditarReceta from "./components/views/receta/EditarReceta";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route exact path="/" element={<Inicio />}></Route>
          <Route
            exact
            path="/administrador"
            element={<Administrador />}
          ></Route>
          <Route
            exact
            path="/administrador/crear-receta"
            element={<CrearReceta />}
          ></Route>
          <Route
            exact
            path="/administrador/editar-receta"
            element={<EditarReceta />}
          ></Route>
          <Route exact path="/*" element={<Error404 />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
