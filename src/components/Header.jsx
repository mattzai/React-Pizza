const Header = () => {
  return (
    <header
      className="text-center text-light py-5"
      style={{
        backgroundImage: "url('./Header.jpg')",
        backgroundSize: "cover",
      }}
    >
      <h1>Pizzería Mamma Mia!</h1>
      <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
    </header>
  );
};

export default Header;
