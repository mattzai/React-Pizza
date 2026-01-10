import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container text-center mt-5">
      <h1>404 - Página no encontrada</h1>
      <p>La pizza que buscas no existe 🍕😢</p>

      <Link to="/" className="btn btn-primary mt-3">
        Volver al Home
      </Link>
    </div>
  );
};

export default NotFound;
