import { useContext, useState } from "react";
import { CartContext } from "../context/cartCtx";
import "./Cart.css";
import { FaTrash, FaMinus, FaPlus, FaWhatsapp } from "react-icons/fa";

export default function Cart() {
  const { items, open, closeCart, updateQuantity, removeItem, clearCart } = useContext(CartContext);
  const [orderSent, setOrderSent] = useState(false);
  const [clientPhone, setClientPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  if (!open) return null;

  const total = items.reduce((acc, i) => acc + (Number(i.price) * Number(i.quantity)), 0);

  const handleSendOrder = () => {
    if (!clientPhone.trim()) {
      setPhoneError("Por favor ingresa tu número de teléfono");
      return;
    }
    
    setPhoneError("");
    const rawPhoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "";
    const phoneNumber = rawPhoneNumber.replace(/\D/g, "");
    
    const itemsList = items.map(i => `- ${i.name} (x${i.quantity}): $${(Number(i.price) * Number(i.quantity)).toFixed(2)}`).join('\n');
    const message = `Hola, quiero realizar el siguiente pedido:\n\n${itemsList}\n\nTotal: $${total.toFixed(2)}\n\nMi número de contacto es: ${clientPhone}`;
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setOrderSent(true);
    clearCart(); // Opcional: limpiar carrito tras enviar
  };

  const handleClose = () => {
    setOrderSent(false);
    setClientPhone("");
    setPhoneError("");
    closeCart();
  };

  return (
    <div className="modal" onClick={handleClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {orderSent ? (
          <div className="success-message">
            <h2>¡Pedido Enviado!</h2>
            <p>Tu pedido está siendo procesado y preparado.</p>
            <p style={{ fontSize: '0.9em', color: '#666', marginTop: 10 }}>Nos pondremos en contacto contigo al {clientPhone} a la brevedad.</p>
            <button className="close-btn" onClick={handleClose} style={{ marginTop: 20, padding: '10px 20px', background: '#333', color: 'white', border: 'none', borderRadius: 5, cursor: 'pointer' }}>Cerrar</button>
          </div>
        ) : (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2>🛒 Carrito</h2>
              <button onClick={handleClose} style={{ background: 'none', border: 'none', fontSize: '1.5em', cursor: 'pointer' }}>×</button>
            </div>
            
            <div className="cart-items-container">
              {items.length === 0 ? (
                <p>El carrito está vacío.</p>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="cart-item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15, paddingBottom: 10, borderBottom: '1px solid #f0f0f0' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 'bold' }}>{item.name}</div>
                      <div style={{ fontSize: '0.9em', color: '#666' }}>${Number(item.price).toFixed(2)} x {item.quantity}</div>
                      <div style={{ fontWeight: 'bold' }}>${(Number(item.price) * Number(item.quantity)).toFixed(2)}</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                      <button onClick={() => updateQuantity(item.id, -1)} style={{ width: 25, height: 25, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #ddd', background: 'white', borderRadius: 4 }}><FaMinus size={10} /></button>
                      <span style={{ minWidth: 20, textAlign: 'center' }}>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} style={{ width: 25, height: 25, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #ddd', background: 'white', borderRadius: 4 }}><FaPlus size={10} /></button>
                      <button onClick={() => removeItem(item.id)} style={{ marginLeft: 8, color: 'red', border: 'none', background: 'transparent', cursor: 'pointer' }}><FaTrash /></button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="cart-footer">
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2em', fontWeight: 'bold' }}>
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              
              <div style={{ marginTop: 15, marginBottom: 10 }}>
                <label style={{ display: 'block', marginBottom: 5, fontWeight: 'bold' }}>Tu Teléfono de Contacto:</label>
                <input 
                  type="tel" 
                  placeholder="Ej: 11 1234 5678"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  style={{ 
                    width: '100%', 
                    padding: '10px', 
                    borderRadius: '5px', 
                    border: '1px solid #ccc',
                    fontSize: '16px'
                  }}
                />
                {phoneError && <p style={{ color: 'red', fontSize: '0.9em', marginTop: 5 }}>{phoneError}</p>}
              </div>

              <button className="send-btn" onClick={handleSendOrder} disabled={items.length === 0}>
                <FaWhatsapp style={{ marginRight: 8, fontSize: '1.2em' }} /> Realizar Pedido
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
