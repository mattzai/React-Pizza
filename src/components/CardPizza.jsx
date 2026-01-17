const CardPizza = ({ name, price, ingredients, img, onAdd }) => {
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

        <button className="btn btn-danger" onClick={onAdd}>
          Añadir 🛒
        </button>

        <p className="fw-bold">${price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default CardPizza;
