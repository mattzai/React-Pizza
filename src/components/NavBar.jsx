import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { total } = useContext(CartContext);
  const { user, logout } = useContext(UserContext);

  return (
    <nav className="p-3 bg-dark text-light d-flex justify-content-between">
      <div className="d-flex gap-2">
        <Link to="/" className="btn btn-outline-light">
          🍕 Home
        </Link>
      </div>

      <div className="d-flex gap-2 align-items-center">
        {user ? (
          <>

          <Link to="/cart" className="btn btn-success">
              🛒 Total: ${total.toLocaleString()}
            </Link>

            <Link to="/profile" className="btn btn-outline-light">
              🔓 Profile
            </Link>

            <button
              className="btn btn-outline-light"
              onClick={logout}
            >
              🔒 Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/cart" className="btn btn-success">
              🛒 Total: ${total.toLocaleString()}
            </Link>

            <Link to="/login" className="btn btn-outline-light">
              🔐 Login
            </Link>

            <Link to="/register" className="btn btn-outline-light">
              📝 Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
