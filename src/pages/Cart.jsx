import { useState } from "react";
import { pizzaCart } from "../pizzas";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increase = (id) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    setCart(updated);
  };

  const decrease = (id) => {
    const updated = cart
      .map((item) =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      )
      .filter((item) => item.count > 0);

    setCart(updated);
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <div className="container mt-4">
      <h2>Carrito de compras</h2>

      {cart.map((item) => (
        <div key={item.id} className="d-flex align-items-center gap-3 my-3">
          <img src={item.img} width={100} alt={item.name} />

          <div>
            <h5>{item.name}</h5>
            <p>${item.price.toLocaleString()}</p>
          </div>

          <div className="ms-auto d-flex gap-2">
            <button
              className="btn btn-danger"
              onClick={() => decrease(item.id)}
            >
              -
            </button>
            <span>{item.count}</span>
            <button
              className="btn btn-success"
              onClick={() => increase(item.id)}
            >
              +
            </button>
          </div>
        </div>
      ))}

      <hr />

      <h4>Total: ${total.toLocaleString()}</h4>

      <button className="btn btn-primary mt-3 w-100">Pagar</button>
    </div>
  );
};

export default Cart;
