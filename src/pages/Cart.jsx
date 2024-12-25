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
              <div className="cart-card">
                <li key={item.id}>
                  <span>{item.name}</span>
                  <span>${item.price}</span>
                  <span>{item.quantity}</span>
                </li>
                <img src={item.image} />
              </div>
            </>
          ))}
          <div className="padding-bottom"></div>
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}
