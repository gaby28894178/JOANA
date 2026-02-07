import { useState } from "react";
import { CartContext } from "./cartCtx";

export function CartProvider({ children }) {
  const [open, setOpen] = useState(false);

  const [items, setItems] = useState([
    { id: 1, name: "Aroma Limón", price: 1200 },
    { id: 2, name: "Legumbres Mix", price: 1800 },
  ]);

  const openCart = () => setOpen(true);
  const closeCart = () => setOpen(false);
  const addItem = (item) => setItems((prev) => [...prev, item]);

  return (
    <CartContext.Provider value={{ items, open, openCart, closeCart, addItem }}>
      {children}
    </CartContext.Provider>
  );
}
