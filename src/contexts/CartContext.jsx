import { createContext, useContext, useState } from "react";

const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export function CartProvider({ children }) {
  const [open, setOpen] = useState(false);

  function toggleCart() {
    setOpen((prev) => !prev);
  }

  return (
    <CartContext.Provider value={{ open, toggleCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
