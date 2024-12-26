import { MdOutlineShoppingCart } from "react-icons/md";
import { useCart } from "../contexts/CartContext";

export default function Navbar() {
  const { toggleCart, cartItems } = useCart();
  return (
    <div className="navbar">
      <span>Astroshop.</span>
      <div className="navbar-cart">
        <div
          className={`navbar-cart-none ${
            cartItems.length > 0 ? "navbar-cart-count" : ""
          }`}>
          {cartItems.length}
        </div>
        <MdOutlineShoppingCart onClick={toggleCart} />
      </div>
    </div>
  );
}
