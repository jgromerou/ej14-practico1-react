import { Button } from 'react-bootstrap';

const ItemBlog = () => {
  return (
    <tr>
      <td>1</td>
      <td className="tamanioCelda text-truncate">Tarta de fresas y albahaca</td>
      <td className="tamanioCelda text-truncate">
        https://cdn.shopify.com/s/files/1/0191/9978/files/1_5f502ef5-6c01-4694-b1ed-be0fb7ff2904.jpg?v=1686237776
      </td>
      <td>Dulce</td>
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

export default ItemBlog;
