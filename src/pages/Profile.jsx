import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container text-center mt-5">
      <h2>Perfil del usuario</h2>
      <p>Email: {user.email}</p>

      <button className="btn btn-danger" onClick={logout}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default Profile;
