import { Button } from 'react-bootstrap';
import error from '../../assets/error404.jpg';
const Error404 = () => {
  return (
    <section className="mainSection text-center mt-3 mb-1">
      <img src={error} alt="error 404" className="error404" />
      <div>
        <Button variant="primary" className="my-3">
          Volver al inicio
        </Button>
      </div>
    </section>
  );
};

export default Error404;