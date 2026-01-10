import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMensaje("❌ Todos los campos son obligatorios");
      return;
    }

    if (password.length < 6) {
      setMensaje("❌ La contraseña debe tener al menos 6 caracteres");
      return;
    }

    setMensaje("✅ ¡Inicio de sesión exitoso!");
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

        <button className="btn btn-success w-100 mt-3">Ingresar</button>
      </form>

      <p className="mt-3">{mensaje}</p>
    </div>
  );
};

export default LoginPage;
