const Navbar = ({ setView }) => {
  const total = 25000;
  const token = false;

  return (
    <nav className="p-3 bg-dark text-light d-flex justify-content-between">
      <div className="d-flex gap-2">
        <button
          className="btn btn-outline-light"
          onClick={() => setView("home")} 
        >
          🍕 Home
        </button>
      </div>

      <div className="d-flex gap-2">
        {token ? (
          <>
            <button className="btn btn-outline-light">🔓 Profile</button>
            <button className="btn btn-outline-light">🔒 Logout</button>
          </>
        ) : (
          <>
            <button
              className="btn btn-outline-light"
              onClick={() => setView("login")}
            >
              🔐 Login
            </button>
            <button
              className="btn btn-outline-light"
              onClick={() => setView("register")}
            >
              📝 Register
            </button>
          </>
        )}

        <button className="btn btn-success">
          🛒 Total: ${total.toLocaleString()}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
