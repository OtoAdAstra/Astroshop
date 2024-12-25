import { createContext, useContext, useState } from "react";

const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export function CartProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  function toggleCart() {
    setOpen((prev) => !prev);
  }

  function addToCart(item) {
    setCartItems((prevItems) => {
      // Check if the item already exists in the cart
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        // Update quantity if item exists
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      // Add new item if it doesn't exist
      return [...prevItems, { ...item, quantity: 1 }];
    });
  }

  return (
    <CartContext.Provider
      value={{ open, toggleCart, cartItems, addToCart, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  return useContext(CartContext);
}
