import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../contexts/CartContext";

// eslint-disable-next-line react/prop-types
export function CardButton({ item }) {
  const { addToCart } = useCart();
  return (
    <button className="card-button" onClick={() => addToCart(item)}>
      <div>
        <IoCartOutline />
        <span>Add to card</span>
      </div>
    </button>
  );
}
