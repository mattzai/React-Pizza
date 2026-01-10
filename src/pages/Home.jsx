import { useEffect, useState } from "react";
import Header from "../components/Header";
//import pizzas from "../pizzas";
import CardPizza from "../components/CardPizza";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((res) => res.json())
      .then((data) => setPizzas(data));
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
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
