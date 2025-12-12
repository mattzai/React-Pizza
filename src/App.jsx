import { useState } from "react";
import Navbar from "./components/NavBar";
import Home from "./views/Home";
import Footer from "./components/Footer";
import RegisterPage from "./views/RegisterPage";
import LoginPage from "./views/LoginPage";
import Cart from "./components/Cart";

function App() {
  const [view, setView] = useState("home");
  return (
    <div
      className="app-layout"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Navbar setView={setView} /> {}
      <div className="app-content" style={{ flex: 1 }}>
        {view === "home" && <Home />}
        {view === "login" && <LoginPage />}
        {view === "register" && <RegisterPage />}
        {view === "cart" && <Cart />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
