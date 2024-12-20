import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { useCart } from "./contexts/CartContext";

function App() {
  const { open } = useCart();
  return (
    <div className={`app ${open ? "appcart" : ""}`}>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
