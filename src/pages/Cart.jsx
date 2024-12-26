import { IoCloseOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { useCart } from "../contexts/CartContext";

export default function Cart() {
  const { toggleCart, cartItems, setCartItems } = useCart();

  const handleIncrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== itemId)
    );
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <IoCloseOutline className="close-icon" onClick={toggleCart} />
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <>
              <div className="cart-card">
                <img src={item.image} />
                <div key={item.id} className="cart-card-text">
                  <span className="cart-card-text-name">{item.name}</span>
                  <span className="cart-card-text-price">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                  <span className="cart-card-text-quantity">
                    <button onClick={() => handleDecrease(item.id)}>-</button>
                    {item.quantity}
                    <button onClick={() => handleIncrease(item.id)}>+</button>
                  </span>
                </div>
                <div
                  className="remove-card"
                  onClick={() => removeItem(item.id)}>
                  <IoIosClose />
                </div>
              </div>
            </>
          ))}
          <div className="padding-bottom"></div>
          <div className="cart-footer">
            <div className="cart-footer-price">${totalPrice.toFixed(2)}</div>
            <div className="cart-footer-checkout">Checkout</div>
          </div>
        </ul>
      ) : (
        <p className="empty-cart">{`Your cart is empty :(`}</p>
      )}
    </div>
  );
}
