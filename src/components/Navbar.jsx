import { useContext } from "react";
import { MenuContext } from "../context/MenuContext";
import { CartContext } from "../context/CartContext";
import ThemeSwitch from "./ThemeSwitch";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";
import logo from '../assets/logo.png'
export default function Navbar() {
  const { toggleMenu } = useContext(MenuContext);
  const { openCart } = useContext(CartContext);

  return (
    <nav className="navbar">
      {/* <h2>Mi Tienda</h2> */}
        <img src={logo} alt="Logo" className="navbar-logo" />

      <ul className="nav-links">
        <li>Shop</li>
        <li>Aroma</li>
        <li>Legumbres</li>
      </ul>

      <div className="actions">
        <ThemeSwitch />
        <button onClick={openCart}>
          <FaShoppingCart />
        </button>
        <button className="hamburger" onClick={toggleMenu}>
          <FaBars />
        </button>
      </div>
    </nav>
  );
}
