import { useContext, useState, useEffect } from "react";
import { NavLink, useNavigate, useSearchParams, useLocation, Link } from "react-router-dom";
import { MenuContext } from "../context/menuCtx";
import { CartContext } from "../context/cartCtx";
import ThemeSwitch from "./ThemeSwitch";
import { FaBars, FaShoppingCart, FaSearch, FaShoppingBag, FaLeaf, FaSeedling } from "react-icons/fa";
import "./Navbar.css";
import logo from '../assets/logo.png'
export default function Navbar() {
  const { toggleMenu } = useContext(MenuContext);
  const { openCart, items } = useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [q, setQ] = useState(searchParams.get("q") || "");

  useEffect(() => {
    if (location.pathname === '/shop' || location.pathname === '/') {
      setQ(searchParams.get("q") || "");
    } else {
      setQ("");
    }
  }, [location.search, location.pathname, searchParams]);

  return (
    <nav className="navbar">
      <Link to="/" className="logo-container" style={{ textDecoration: 'none' }}>
        <span className="logo-text , lobster-regular ">Joha </span>
        <img src={logo} alt="H" className="navbar-logo" />
        {/* <span className="logo-text"></span> */}
      </Link>

        

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
            onChange={(e) => {
              const value = e.target.value;
              setQ(value);
              navigate(`/shop?q=${encodeURIComponent(value)}`, { replace: true });
            }}
            placeholder="Buscar"
          />
          <button aria-label="buscar" onClick={() => navigate(`/shop?q=${encodeURIComponent(q)}`)}>
            <FaSearch />
          </button>
        </div>
        <ThemeSwitch />
        <button onClick={openCart} style={{ position: 'relative' }}>
          <FaShoppingCart size={32} />
          {items.length > 0 && (
            <span style={{
              position: 'absolute',
              top: -5,
              right: -5,
              backgroundColor: 'red',
              color: 'white',
              borderRadius: '50%',
              padding: '2px 6px',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
              {items.length}
            </span>
          )}
        </button>
        <button className="hamburger" onClick={toggleMenu}>
          <FaBars size={22} />
        </button>
      </div>
    </nav>
  );
}
