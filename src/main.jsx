import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/main.sass";
import { CartProvider } from "./contexts/CartContext";

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <App />
  </CartProvider>
);
