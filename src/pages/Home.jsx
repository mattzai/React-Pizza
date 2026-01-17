import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((res) => res.json())
      .then((data) => setPizzas(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
      <Header />

      <div className="container my-4 d-flex gap-3 justify-content-center flex-wrap">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
            onAdd={() => addToCart(pizza)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
