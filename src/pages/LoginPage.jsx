import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMensaje("❌ Todos los campos son obligatorios");
      return;
    }

    if (password.length < 6) {
      setMensaje("❌ La contraseña debe tener al menos 6 caracteres");
      return;
    }

    try {
      await login(email, password);
      setMensaje("✅ ¡Inicio de sesión exitoso!");
      navigate("/profile");
    } catch (error) {
      setMensaje("❌ Error al iniciar sesión");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control my-2"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="form-control my-2"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-success w-100 mt-3">
          Ingresar
        </button>
      </form>

      {mensaje && <p className="mt-3">{mensaje}</p>}
    </div>
  );
};

export default LoginPage;
