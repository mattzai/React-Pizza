import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Pizza = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/pizzas/${id}`)
      .then((res) => res.json())
      .then((data) => setPizza(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!pizza) return <p className="text-center mt-5">Cargando 🍕</p>;

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

          <button
            className="btn btn-danger mt-3"
            onClick={() => addToCart(pizza)}
          >
            Agregar al carrito 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
