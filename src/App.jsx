import { useState } from "react";
import Navbar from "./components/NavBar";
import Home from "./views/Home";
import Footer from "./components/Footer";
import RegisterPage from "./views/RegisterPage";
import LoginPage from "./views/LoginPage";

function App() {
  const [view, setView] = useState("home"); // 👈 Estado que controla la vista actual

  return (
    <div className="app-layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar setView={setView} /> {/* 👈 Le pasamos la función al Navbar */}

      <div className="app-content" style={{ flex: 1 }}>
        {view === "home" && <Home />}
        {view === "login" && <LoginPage />}
        {view === "register" && <RegisterPage />}
      </div>

      <Footer />
    </div>
  );
}

export default App;

