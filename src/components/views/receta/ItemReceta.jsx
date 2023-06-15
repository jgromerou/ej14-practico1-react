import { Button } from 'react-bootstrap';

const ItemReceta = ({ receta }) => {
  return (
    <tr>
      <td className="tamanioCeldaFijo">{receta.id}</td>
      <td className="tamanioCelda text-truncate">{receta.nombreReceta}</td>
      <td className="tamanioCelda text-truncate">{receta.imagen}</td>
      <td className="tamanioCeldaFijo">{receta.categoria}</td>
      <td className="tamanioCeldaOpciones text-center">
        <Button className="btn btn-warning my-2 my-lg-0 me-lg-2">
          <i className="bi bi-pencil p-1"></i>
        </Button>
        <Button variant="danger">
          <i className="bi bi-x-lg p-1"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;
