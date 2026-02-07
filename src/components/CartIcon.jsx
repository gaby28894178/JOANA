import { FaShoppingCart } from "react-icons/fa";

function CartIcon({ count = 0 }) {
  return (
    <div className="cart">
      <FaShoppingCart />
      {count > 0 && <span className="cart-badge">{count}</span>}
    </div>
  );
}

export default CartIcon;
