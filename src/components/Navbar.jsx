import { useContext, useState } from "react";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { MenuContext } from "../context/menuCtx";
import { CartContext } from "../context/cartCtx";
import ThemeSwitch from "./ThemeSwitch";
import { FaBars, FaShoppingCart, FaSearch, FaShoppingBag, FaLeaf, FaSeedling } from "react-icons/fa";
import "./Navbar.css";
import logo from '../assets/logo.png'
export default function Navbar() {
  const { toggleMenu } = useContext(MenuContext);
  const { openCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [q, setQ] = useState("");

  return (
    <nav className="navbar">
      <div className="logo-container">
        <span className="logo-text">Joha </span>
        <img src={logo} alt="H" className="navbar-logo" />
        {/* <span className="logo-text"></span> */}
      </div>

        

      <ul className="nav-links">
        <li>
          <NavLink to="/shop"><FaShoppingBag /> <span>Shop</span></NavLink>
        </li>
        <li>
          <NavLink to="/aroma"><FaLeaf /> <span>Aroma</span></NavLink>
        </li>
        <li>
          <NavLink to="/legumbres"><FaSeedling /> <span>Legumbres</span></NavLink>
        </li>
      </ul>

      <div className="actions">
        <div className="nav-search">
          <input
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar"
          />
          <button aria-label="buscar" onClick={() => navigate(`/shop?q=${encodeURIComponent(q)}`)}>
            <FaSearch />
          </button>
        </div>
        <ThemeSwitch />
        <button onClick={openCart}>
          <FaShoppingCart size={32} />
        </button>
        <button className="hamburger" onClick={toggleMenu}>
          <FaBars size={22} />
        </button>
      </div>
    </nav>
  );
}
