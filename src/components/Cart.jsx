import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

export default function Cart() {
  const { items, open, closeCart } = useContext(CartContext);

  if (!open) return null;

  const total = items.reduce((acc, i) => acc + i.price, 0);

  return (
    <div className="modal" onClick={closeCart}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>🛒 Carrito</h2>

        {items.map(item => (
          <p key={item.id}>
            {item.name} - ${item.price}
          </p>
        ))}

        <hr />
        <strong>Total: ${total}</strong>

        <button className="send-btn">Enviar pedido</button>
        <button className="close-btn" onClick={closeCart}>Cerrar</button>
      </div>
    </div>
  );
}
