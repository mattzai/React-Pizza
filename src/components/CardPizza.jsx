import { Link } from "react-router-dom";

const CardPizza = ({ id, name, price, ingredients, img, onAdd }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt={name} />

      <div className="card-body">
        <h5 className="card-title">{name}</h5>

        <ul>
          {ingredients.map((ing, i) => (
            <li key={i}>{ing}</li>
          ))}
        </ul>

        <p className="fw-bold">${price.toLocaleString()}</p>

        <div className="d-flex justify-content-between">
          <Link to={`/pizza/${id}`} className="btn btn-outline-primary">
            Ver más 👀
          </Link>

          <button className="btn btn-danger" onClick={onAdd}>
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
