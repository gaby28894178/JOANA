import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MenuContext } from "../context/menuCtx";
import { FaSearch, FaShoppingBag, FaLeaf, FaSeedling, FaTimes } from "react-icons/fa";
import "./MobileMenu.css";

export default function MobileMenu() {
  const { open, closeMenu } = useContext(MenuContext);
  const navigate = useNavigate();
  const [q, setQ] = useState("");

  const handleSearch = () => {
    if (q.trim()) {
      navigate(`/shop?q=${encodeURIComponent(q.trim())}`);
      closeMenu();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  if (!open) return null;

  return (
    <div className="mobile-menu-overlay" onClick={closeMenu}>
      <div className="mobile-menu-content" onClick={e => e.stopPropagation()}>
        <div className="mobile-menu-header">
          <h3>Menú</h3>
          <button className="close-menu-btn" onClick={closeMenu}>
            <FaTimes />
          </button>
        </div>

        {/* Input de búsqueda dentro del menú móvil */}
        <div className="mobile-search">
          <input
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Buscar productos..."
            className="mobile-search-input"
          />
          <button className="mobile-search-btn" onClick={handleSearch}>
            <FaSearch />
          </button>
        </div>

        {/* Navegación */}
        <nav className="mobile-nav-links">
          <NavLink to="/shop" onClick={closeMenu}>
            <FaShoppingBag /> <span>Shop</span>
          </NavLink>
          <NavLink to="/aroma" onClick={closeMenu}>
            <FaLeaf /> <span>Aroma</span>
          </NavLink>
          <NavLink to="/legumbres" onClick={closeMenu}>
            <FaSeedling /> <span>Legumbres</span>
          </NavLink>
        </nav>
      </div>
    </div>
  );
}