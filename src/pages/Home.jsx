import items from "../items.js";
import Card from "../components/Card";
import Cart from "./Cart.jsx";

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="home-title">
          <h1>List products</h1>
        </div>
        <div className="home-cards">
          {items.map((item) => (
            <Card
              key={item.id}
              image={item.img}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
        <Cart />
      </div>
    </>
  );
}
