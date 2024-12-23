import { CardButton } from "./Buttons";

// eslint-disable-next-line react/prop-types
export default function Card({ image, name, price, id }) {
  const item = { id, name, price, image };
  return (
    <article className="card">
      <img src={image} alt={name} />
      <div className="info">
        <div className="card-name">
          <h2>{name}</h2>
        </div>
        <div className="card-bottom">
          <div className="card-price">
            <span>$</span>
            <p>{price.toLocaleString("en-US")}</p>
          </div>

          <CardButton item={item} />
        </div>
      </div>
    </article>
  );
}
