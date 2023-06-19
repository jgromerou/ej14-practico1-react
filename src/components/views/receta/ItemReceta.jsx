import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemReceta = ({ receta }) => {
  return (
    <tr>
      <td className="tamanioCeldaFijo">{receta.id}</td>
      <td className="tamanioCelda text-truncate">{receta.nombreReceta}</td>
      <td className="tamanioCelda text-truncate">{receta.imagen}</td>
      <td className="tamanioCeldaFijo">{receta.categoria}</td>
      <td className="tamanioCeldaOpciones text-center">
        <Link
          className="btn btn-warning my-2 my-lg-0 me-lg-2"
          to={"/administrador/editar-receta" + receta.id}
        >
          <i className="bi bi-pencil p-1"></i>
        </Link>
        <Button variant="danger">
          <i className="bi bi-x-lg p-1"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;
