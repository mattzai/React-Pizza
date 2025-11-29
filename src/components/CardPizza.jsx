const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt={name} />

      <div className="card-body">
        <h4>{name}</h4>
        <p>
          <strong>${price.toLocaleString()}</strong>
        </p>

        <p>
          <strong>Ingredientes:</strong>
          <br />
          {ingredients.join(", ")}
        </p>

        <button className="btn btn-outline-primary me-2">Ver más</button>
        <button className="btn btn-success">Añadir</button>
      </div>
    </div>
  );
};

export default CardPizza;
