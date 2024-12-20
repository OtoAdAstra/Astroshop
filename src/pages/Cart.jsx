import { IoCloseOutline } from "react-icons/io5";
import { useCart } from "../contexts/CartContext";

export default function Cart() {
  const { toggleCart } = useCart();

  return (
    <div className="cart">
      <IoCloseOutline className="close-icon" onClick={toggleCart} />
      <h1>123</h1>
    </div>
  );
}
