import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [open, setOpen] = useState(false);

  const [items] = useState([
    { id: 1, name: "Aroma Limón", price: 1200 },
    { id: 2, name: "Legumbres Mix", price: 1800 },
  ]);

  const openCart = () => setOpen(true);
  const closeCart = () => setOpen(false);

  return (
    <CartContext.Provider value={{ items, open, openCart, closeCart }}>
      {children}
    </CartContext.Provider>
  );
}
