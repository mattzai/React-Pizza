import { useEffect, useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas/p001")
      .then((res) => res.json())
      .then((data) => setPizza(data));
  }, []);

  if (!pizza) return null;

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img src={pizza.img} alt={pizza.name} className="img-fluid" />
        </div>

        <div className="col-md-6">
          <h2>{pizza.name}</h2>
          <p>{pizza.desc}</p>

          <ul>
            {pizza.ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>

          <h4>${pizza.price.toLocaleString()}</h4>

          <button className="btn btn-primary mt-3">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
