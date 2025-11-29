import Navbar from "./components/NavBar";
import Home from "./views/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div className="app-content" style={{ flex: 1 }}>
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
