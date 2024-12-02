import { MdOutlineShoppingCart } from "react-icons/md";

export default function Navbar() {
  return (
    <div className="navbar">
      <span>Astroshop.</span>
      <div className="navbar-cart">
        <MdOutlineShoppingCart />
      </div>
    </div>
  );
}
