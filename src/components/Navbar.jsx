import { MdOutlineShoppingCart } from "react-icons/md";
import { useCart } from "../contexts/CartContext";

export default function Navbar() {
  const { toggleCart } = useCart();
  return (
    <div className="navbar">
      <span>Astroshop.</span>
      <div className="navbar-cart">
        <MdOutlineShoppingCart onClick={toggleCart} />
      </div>
    </div>
  );
}
