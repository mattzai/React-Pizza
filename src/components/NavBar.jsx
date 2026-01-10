import { Link } from "react-router-dom";

const Navbar = () => {
  const token = false;

  return (
    <nav className="p-3 bg-dark text-light d-flex justify-content-between">
      <div className="d-flex gap-2">
        <Link to="/" className="btn btn-outline-light">
          🍕 Home
        </Link>
      </div>

      <div className="d-flex gap-2">
        {token ? (
          <>
            <Link to="/profile" className="btn btn-outline-light">
              🔓 Profile
            </Link>

            <button className="btn btn-outline-light">🔒 Logout</button>
          </>
        ) : (
          <>
            <Link to="/cart" className="btn btn-success">
              🛒 Carrito
            </Link>

            <Link to="/login" className="btn btn-outline-light">
              🔐 Login
            </Link>

            <Link to="/register" className="btn btn-outline-light">
              📝 Register
            </Link>

            <Link to="/NotFound" classname="btn btn-outline-light">
              TestError
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
