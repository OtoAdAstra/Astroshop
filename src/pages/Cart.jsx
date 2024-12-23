import { IoCloseOutline } from "react-icons/io5";
import { useCart } from "../contexts/CartContext";

export default function Cart() {
  const { toggleCart, cartItems } = useCart();

  return (
    <div className="cart">
      <IoCloseOutline className="close-icon" onClick={toggleCart} />
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <>
              <li key={item.id}>
                {item.name} - ${item.price} x {item.quantity}
              </li>
              <img src={item.img} />
            </>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <h1>123</h1>
    </div>
  );
}
