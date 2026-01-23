import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, addToCart, removeFromCart, total } = useContext(CartContext);
  const { user } = useContext(UserContext);

  return (
    <div className="container mt-4">
      <h2>Carrito de compras</h2>

      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="d-flex align-items-center gap-3 my-3">
            <img src={item.img} width={80} alt={item.name} />

            <div>
              <h5 className="mb-1 text-capitalize">{item.name}</h5>
              <p className="mb-0">${item.price.toLocaleString()}</p>
            </div>

            <div className="ms-auto d-flex align-items-center gap-2">
              <button
                className="btn btn-danger"
                onClick={() => removeFromCart(item.id)}
              >
                -
              </button>

              <span>{item.count}</span>

              <button
                className="btn btn-success"
                onClick={() => addToCart(item)}
              >
                +
              </button>
            </div>
          </div>
        ))
      )}

      <hr />

      <h4>Total: ${total.toLocaleString()}</h4>

      <button className="btn btn-primary mt-3 w-100" disabled={!user}>
        Pagar
      </button>
    </div>
  );
};

export default Cart;
